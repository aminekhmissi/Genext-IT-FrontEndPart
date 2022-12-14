import { Component } from '@angular/core';
import { FavorisService } from '../services/favoris.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-list-favoris',
  templateUrl: './list-favoris.component.html',
  styleUrls: ['./list-favoris.component.scss'],
})
export class ListFavorisComponent {
  items = [] as any;
  p: number = 1;
  constructor(private favorisService: FavorisService) {}
  ngOnInit(): void {
    this.favorisService.loadFavoris();
    this.items = this.favorisService.getItems();
    console.log('items:', this.items);
  }
  removeFavoris(lodge: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.favorisService.removeFavoris(lodge);
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  }
}
