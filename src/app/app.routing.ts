import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Header } from './header/header.component'
import { Home } from './home/home.component'

const appRoutes: Routes = [
  {path:'',component:Home},
  {path:'home',component:Home},
  {path:'foo',component:Foo},
  {path:'bar',component:Bar},
  {path:'queen',component:Queen},
  {path:'the-rolling-stones',component:Rollings},
  {path:'the-beatles',component:Beatles},
  {path:'**',component:Home}

]

export const  appRoutingProviders:any[]=[];
export const routing:ModuleWithProviders=RouterModule.forRoot (appRoutes);
