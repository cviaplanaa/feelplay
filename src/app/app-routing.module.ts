import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CancionesComponent } from './canciones/canciones.component';
import { InicioComponent }   from './inicio/inicio.component';
import { CancionDetalleComponent }   from './cancion-detalle/cancion-detalle.component';

const routes: Routes = [
  { path: 'canciones', component: CancionesComponent },
  { path: 'inicio', component: InicioComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'detail/:id', component: CancionDetalleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
