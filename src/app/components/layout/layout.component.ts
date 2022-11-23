import { Component } from '@angular/core';
import { LodgeService } from 'src/app/services/lodge.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  constructor() {}
  listLodges: any;
  ngOnInit(): void {
    console.log('hello !!');
  }
  getAllLodges() {}
}
