import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetaillodgeRoutingModule } from './detaillodge-routing.module';
import { DetaillodgeComponent } from './detaillodge.component';


@NgModule({
  declarations: [
    DetaillodgeComponent
  ],
  imports: [
    CommonModule,
    DetaillodgeRoutingModule
  ]
})
export class DetaillodgeModule { }
