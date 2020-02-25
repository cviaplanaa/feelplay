import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CancionesComponent } from './canciones/canciones.component';
import { InicioComponent }   from './inicio/inicio.component';
import { CancionDetalleComponent }   from './cancion-detalle/cancion-detalle.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'canciones', component: CancionesComponent },
  { path: 'inicio', component: InicioComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'detail/:id', component: CancionDetalleComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
