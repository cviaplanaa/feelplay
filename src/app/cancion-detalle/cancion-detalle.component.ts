import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

import { Cancion } from '../cancion';
//import { CancionService }  from '../cancion.service';
import { TestsongService } from './../services/testsong.service';

//Checkbox FormControl agrupar múltiple selección
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-cancion-detalle',
  templateUrl: './cancion-detalle.component.html',
  styleUrls: ['./cancion-detalle.component.css']
})
export class CancionDetalleComponent implements OnInit {
  
  //cancion: Cancion;

  cancion: Observable<any[]>;
  //cancion: any[] = []; // Se declara array

  constructor(
    private ruta: ActivatedRoute,
    private _servicio: TestsongService,
    private location : Location
  ) {
    this.ruta.params.subscribe(params=>{
      console.log(params['id']) // Muestra el id por consola
      this.cancion = this._servicio.getASong(params['id']) // Rellena el array equipo declarado arriba
    })
   }

   

  ngOnInit(): void {
    //this.getCancion();
  }

  /*
  getCancion(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.cancionService.getCancion(id)
      .subscribe(cancion => this.cancion = cancion);
    }
    */

  goBack(): void {
    this.location.back();
  }
}
