import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListFavorisRoutingModule } from './list-favoris-routing.module';
import { ListFavorisComponent } from './list-favoris.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [ListFavorisComponent],
  imports: [CommonModule, ListFavorisRoutingModule, NgxPaginationModule],
})
export class ListFavorisModule {}
