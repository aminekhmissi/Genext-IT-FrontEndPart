import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLodgeComponent } from './add-lodge.component';

const routes: Routes = [{ path: '', component: AddLodgeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddLodgeRoutingModule { }
