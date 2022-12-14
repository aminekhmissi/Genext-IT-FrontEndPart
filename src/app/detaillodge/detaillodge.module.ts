import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetaillodgeRoutingModule } from './detaillodge-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, DetaillodgeRoutingModule, FormsModule, SharedModule],
})
export class DetaillodgeModule {}
