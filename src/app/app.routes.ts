import { Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {LayoutComponent} from "./pages/layout/layout.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {HomeComponent} from "./pages/home/home.component";

export const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'home',
        component: HomeComponent,
        title: 'home'
      },
      {
         path:'profile',
        component: ProfileComponent,
        title: 'profile'
      },
      {
        path:'dashboard',
        component: DashboardComponent,
        title: 'dashboard'
      }
    ]
  }
];
