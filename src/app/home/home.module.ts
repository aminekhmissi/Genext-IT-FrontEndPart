import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FooterComponent } from '../components/footer/footer.component';
import { LayoutComponent } from '../components/layout/layout.component';
import { HeaderComponent } from '../components/header/header.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetaillodgeComponent } from '../detaillodge/detaillodge.component';
import { ReservationModalComponent } from '../shared/reservation-modal/reservation-modal.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    DetaillodgeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    NgbModule,
    SharedModule,
  ],
  entryComponents: [ReservationModalComponent],
})
export class HomeModule {}
