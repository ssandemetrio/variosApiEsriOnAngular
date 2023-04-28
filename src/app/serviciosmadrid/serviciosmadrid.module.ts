import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosmadridRoutingModule } from './serviciosmadrid-routing.module';
import { ServiciosmadridComponent } from './serviciosmadrid.component';


@NgModule({
  declarations: [ServiciosmadridComponent],
  imports: [
    CommonModule,
    ServiciosmadridRoutingModule
  ]
})
export class ServiciosmadridModule { }
