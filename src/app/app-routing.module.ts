import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path:'', component:HomeComponent, pathMatch:'full'
  },
  {
    path:'login', component:LoginComponent , pathMatch:'full'
  },
  {
    path:'navbar', component:NavBarComponent, pathMatch:'full'
  },
  {
    path:'dashboard', component:DashBoardComponent, pathMatch:'full' , canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
