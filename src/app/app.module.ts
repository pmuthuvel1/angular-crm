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
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AngularMaterialModule } from './angular-material.module';

/* FormsModule */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Angular Flex Layout */
import { FlexLayoutModule } from "@angular/flex-layout";
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    ConfigmasterComponent,
    ConfigdetailComponent,
    DashboardComponent,
    ProductsalesComponent,
    TelecomsalesComponent,
    TelecomplansComponent,
    MainNavComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
