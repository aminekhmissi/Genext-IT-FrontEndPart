import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetaillodgeComponent } from './detaillodge.component';

const routes: Routes = [{ path: '', component: DetaillodgeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetaillodgeRoutingModule { }
