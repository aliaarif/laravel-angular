import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GuestGuard } from './Guards/guest.guard';
import { AuthGuard } from './Guards/auth.guard';




const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },

  {
    path:'login',
    component: LoginComponent,
    canActivate: [GuestGuard]
  },
  {
    path:'register',
    component: RegisterComponent,
    canActivate: [GuestGuard]
  },

  {
    path:'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },

];






@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
