import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddAddressRoutingModule } from './add-address-routing.module';
import { AddAddressComponent } from './add-address.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddAddressComponent],
  imports: [CommonModule, AddAddressRoutingModule, ReactiveFormsModule],
})
export class AddAddressModule {}
