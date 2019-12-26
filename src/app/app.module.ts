import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

import { ConfigmasterComponent } from './pages/configmaster/configmaster.component';
import { ConfigdetailComponent } from './pages/configdetail/configdetail.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductsalesComponent } from './pages/productsales/productsales.component';
import { TelecomsalesComponent } from './pages/telecomsales/telecomsales.component';
import { TelecomplansComponent } from './pages/telecomplans/telecomplans.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    ConfigmasterComponent,
    ConfigdetailComponent,
    DashboardComponent,
    ProductsalesComponent,
    TelecomsalesComponent,
    TelecomplansComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
