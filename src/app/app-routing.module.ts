import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HeaderComponent} from "./header/header.component";
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
  {path: '', component: LoginComponent },
  {path: 'header', component: HeaderComponent },
  {path: 'registration', component: RegisterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
