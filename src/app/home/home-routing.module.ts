import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAddressComponent } from '../add-address/add-address.component';
import { AddLodgeComponent } from '../add-lodge/add-lodge.component';
import { LayoutComponent } from '../components/layout/layout.component';
import { DetaillodgeComponent } from '../detaillodge/detaillodge.component';
import { ListFavorisComponent } from '../list-favoris/list-favoris.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: LayoutComponent }, //default component display
      { path: 'detaillodge/:id', component: DetaillodgeComponent },
      { path: 'addLodge/:id', component: AddLodgeComponent },
      { path: 'addAddress', component: AddAddressComponent },
      { path: 'listfavoris', component: ListFavorisComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
