import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RootComponent } from './root.component';

import { LoginComponent } from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component'

const routes: Routes = [
  {  
  path: 'login', component: LoginComponent
},
{  
  path: '', component: LoginComponent
},
{
  path: 'register', component: RegisterComponent
}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RootRoutingModule { }
