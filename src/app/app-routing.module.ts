import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  { path: 'detaillodge', loadChildren: () => import('./detaillodge/detaillodge.module').then(m => m.DetaillodgeModule) },
  { path: 'addLodge', loadChildren: () => import('./add-lodge/add-lodge.module').then(m => m.AddLodgeModule) },
  { path: 'addAddress', loadChildren: () => import('./add-address/add-address.module').then(m => m.AddAddressModule) },
  { path: 'calendar', loadChildren: () => import('./calendar/calendar.module').then(m => m.CalendarModule) },
  { path: 'listFavoris', loadChildren: () => import('./list-favoris/list-favoris.module').then(m => m.ListFavorisModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
