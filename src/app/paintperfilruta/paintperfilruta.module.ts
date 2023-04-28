import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaintperfilrutaRoutingModule } from './paintperfilruta-routing.module';
import { PaintperfilrutaComponent } from './paintperfilruta.component';


@NgModule({
  declarations: [PaintperfilrutaComponent],
  imports: [
    CommonModule,
    PaintperfilrutaRoutingModule
  ]
})
export class PaintperfilrutaModule { }
