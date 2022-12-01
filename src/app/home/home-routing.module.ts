import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotComponent } from '../components/forgot/forgot.component';
import { LayoutComponent } from '../components/layout/layout.component';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { ResetComponent } from '../components/reset/reset.component';
import { HomeComponent } from './home.component';
import { GuardsGuard } from '../guards.guard';

const routes: Routes = [
  {
    path: '',

    component: HomeComponent,
    children: [
      { path: '', component: LayoutComponent },
      { path: 'resgister', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'forgot', component: ForgotComponent },
      { path: 'resetPassword/:token', component: ResetComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
