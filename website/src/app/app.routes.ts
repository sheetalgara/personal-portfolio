import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {ContactComponent} from './contact/contact.component';
import {WorkComponent} from './work/work.component';

export const router: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'work', component: WorkComponent},
  { path: 'art', component: PortfolioComponent},
  { path: 'contact', component: ContactComponent}
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(router);
