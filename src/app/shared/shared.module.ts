import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationModalComponent } from './reservation-modal/reservation-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { IgxCalendarComponent } from 'igniteui-angular';
import { IgxCalendarModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ReservationModalComponent],
  imports: [CommonModule, IgxCalendarModule, HammerModule, FormsModule],
  exports: [ReservationModalComponent],
})
export class SharedModule {}
