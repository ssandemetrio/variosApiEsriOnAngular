import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiciosmadridComponent } from './serviciosmadrid.component';

const routes: Routes = [
  {
    path:'',
    component: ServiciosmadridComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiciosmadridRoutingModule { }
