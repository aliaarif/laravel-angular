import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Home1Component } from './home1/home1.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



localStorage.setItem('user', 'Admin');

if(localStorage.has('user')){
 

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },

  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },

];

}else{
const routes: Routes = [
  {
    path:'',
    component: Home1Component
  },

];

}




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
