import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaintperfilrutaComponent } from './paintperfilruta.component';
import { ServiciosmadridComponent } from '../serviciosmadrid/serviciosmadrid.component';

const routes: Routes = [
  {
    path:'',
    component: PaintperfilrutaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaintperfilrutaRoutingModule { }
