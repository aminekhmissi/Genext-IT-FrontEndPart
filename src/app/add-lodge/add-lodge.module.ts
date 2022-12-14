import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddLodgeRoutingModule } from './add-lodge-routing.module';
import { AddLodgeComponent } from './add-lodge.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddLodgeComponent],
  imports: [CommonModule, AddLodgeRoutingModule, ReactiveFormsModule],
})
export class AddLodgeModule {}
