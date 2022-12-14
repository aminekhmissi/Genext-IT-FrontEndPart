import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { FavorisService } from 'src/app/services/favoris.service';
import { LodgeService } from 'src/app/services/lodge.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  constructor(
    private lodgeService: LodgeService,
    private categoryService: CategoryService,
    private favorisservice: FavorisService
  ) {}
  listLodges: any;
  listCategories: any;
  search_category: any;
  Price: any;
  p: number = 1;
  term: any;
  now = new Date().toISOString().split('T')[0].toString();

  ngOnInit(): void {
    this.getAllLodges();
    console.log(this.now);
    this.getAllCategories();
  }
  getAllLodges() {
    this.lodgeService.getAllLodges().subscribe((res: any) => {
      this.listLodges = res['data'].filter((element: any) => {
        return (
          element.confirmed == true &&
          Date.parse(element.datefin) >= Date.parse(this.now)
        );
      });
      console.log('listLodges:', this.listLodges);
    });
  }
  getAllCategories() {
    this.categoryService.getAllCategories().subscribe((res: any) => {
      this.listCategories = res['data'];
      console.log('all categories:', this.listCategories);
    });
  }
  SearchByCategory() {
    console.log('search:', this.search_category);
    console.log('search min price:', this.Price);
    this.lodgeService.getAllLodges().subscribe((res: any) => {
      this.listLodges = res['data'].filter((element: any) => {
        return (
          element.category == this.search_category ||
          (element.price <= this.Price && element.price >= this.Price - 100)
        );
      });
    });
  }
  addToFavoris(lodge: any) {
    this.favorisservice.addToFavoris(lodge);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Property has been saved to Favoris List',
      showConfirmButton: false,
      timer: 1500,
    });
  }
}
