import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainpageComponent} from './mainpage/mainpage.component';
import {LoginComponent} from './login/login.component';

// Config Routings Here
const routes: Routes = [
  {
    path: '', component: MainpageComponent
  },
  {
    path: 'login', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
