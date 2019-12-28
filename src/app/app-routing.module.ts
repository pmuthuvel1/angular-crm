import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path : 'login', component : LoginComponent},
  {path : 'logout', component : LogoutComponent },
  {path : 'register', component : RegisterComponent },
  {path : 'mainnav', component : MainNavComponent },
  {path : 'dashboard', component : DashboardComponent,
   children : [
     {path: 'configmaster', loadChildren: () => import('./pages/configmaster/configmaster.module').then(m => m.ConfigmasterModule)},
     {path: 'configdetail', loadChildren: () => import('./pages/configdetail/configdetail.module').then(m => m.ConfigdetailModule)},
     {path: 'product', loadChildren: () => import('./pages/product/product.module').then(m => m.ProductModule)},
     {path: 'productsales', loadChildren: () => import('./pages/productsales/productsales.module').then(m => m.ProductsalesModule)},
     {path: 'telecomplans', loadChildren: () => import('./pages/telecomplans/telecomplans.module').then(m => m.TelecomplansModule)},
     {path: 'telecomsales', loadChildren: () => import('./pages/telecomsales/telecomsales.module').then(m => m.TelecomsalesModule)},
   ] },
  {path : '**', component : LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
