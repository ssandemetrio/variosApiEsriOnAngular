import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'paintperfilruta', loadChildren: () =>
    import('./paintperfilruta/paintperfilruta-routing.module').then(m => m.PaintperfilrutaRoutingModule)
  },
  {
    path: 'serviciosmadrid', loadChildren: () =>
    import('./serviciosmadrid/serviciosmadrid-routing.module').then(m => m.ServiciosmadridRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
