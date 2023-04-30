import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SideBarComponent } from './home/side-bar/side-bar.component';
import { NavBarComponent } from './home/nav-bar/nav-bar.component';
import { FooterComponent } from './home/footer/footer.component';
import { LayoutComponent } from './home/layout/layout.component';
import { ConducteurComponent } from './conducteur/conducteur.component';
import { LoginComponent } from './login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { Error404Component } from './error404/error404.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { ProfileadminComponent } from './profileadmin/profileadmin.component';
import { ProfiluserComponent } from './profiluser/profiluser.component';
import { PassagerComponent } from './passager/passager.component';
import { MarquevoitureComponent } from './marquevoiture/marquevoiture.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { ConducteurItemComponent } from './conducteur/conducteur-item/conducteur-item.component';
import { ModalpopupComponent } from './modalpoppup/modalpoppup.component';
import { MaterialModule } from '../material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDirective } from './drag.directive';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideBarComponent,
    NavBarComponent,
    FooterComponent,
    LayoutComponent,
    ConducteurComponent,
    LoginComponent,
    RegisterComponent,
    Error404Component,
    ReclamationComponent,
    ProfileadminComponent,
    ProfiluserComponent,
    PassagerComponent,
    MarquevoitureComponent,
    AnnonceComponent,
    ConducteurItemComponent,
    ModalpopupComponent,
    DragDirective
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,ReactiveFormsModule,MaterialModule,BrowserAnimationsModule,


    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
