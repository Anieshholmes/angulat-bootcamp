import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/containers/home/home.component';


const dynamicModuleRoutes = [
  {
    path: 'home',
    // loadChildren: () => import('').then(m => m.module),
  }
]

export const rootRouterConfig: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    // children: dynamicModuleRoutes
}];
