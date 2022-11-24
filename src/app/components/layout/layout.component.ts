import { Component } from '@angular/core';
import { LodgeService } from 'src/app/services/lodge.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  constructor(private lodgeService: LodgeService) {}
  listLodges: any;
  now = new Date().toISOString().split('T')[0].toString();

  ngOnInit(): void {
    this.getAllLodges();
    console.log(this.now);
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
}
