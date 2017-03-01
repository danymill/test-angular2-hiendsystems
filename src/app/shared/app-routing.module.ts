import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { RegisterComponent } from "../components/register/register.component";
import { RegisterSuccessComponent } from "../components/register-success/register-success.component";

const APP_ROUTES: Routes = [
  {
    path: '',
    component: RegisterComponent,
    pathMatch: 'full'
  },
  {
    path: 'register-success',
    component: RegisterSuccessComponent
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
