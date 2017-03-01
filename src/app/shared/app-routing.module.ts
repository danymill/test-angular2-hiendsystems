import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { RegisterComponent } from "../components/register/register.component";

const APP_ROUTES: Routes = [
  {
    path: '',
    component: RegisterComponent,
    pathMatch: 'full'
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
