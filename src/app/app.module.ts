import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaintperfilrutaComponent } from './paintperfilruta/paintperfilruta.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServiciosmadridComponent } from './serviciosmadrid/serviciosmadrid.component';
import { Servicios2Component } from './servicios2/servicios2.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Servicios2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
