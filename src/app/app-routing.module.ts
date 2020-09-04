import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponentComponent } from "./components/login-component/login-component.component";
import { LandingComponent } from "./components/landing/landing.component";
import { ErrorComponent } from "./components/error/error.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'bienvenida',
    component: LandingComponent
  },
  {
    path: 'login',
    component: LoginComponentComponent
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
