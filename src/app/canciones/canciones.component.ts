import { Component, OnInit } from '@angular/core';
import { Cancion } from '../cancion';
import { Location } from '@angular/common';
import { CancionService } from '../cancion.service';
import { TestsongService } from './../services/testsong.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.css']
})

export class CancionesComponent implements OnInit {
  
  canciones: any;

  //canciones: Observable<any[]>;  

  constructor(
    private _servicio: TestsongService,
    private location: Location
  ) {
    this._servicio.getSongs().subscribe(cancion=>{
      this.canciones = cancion;
      console.log(this.canciones)
    })
   }

  ngOnInit() {
    //this.getCanciones();
  }

  eliminar(cancion){
    this._servicio.deleteCancion(cancion);
  }

  editar(cancion){
    
  }
/*
  getCanciones(): void {
    this.cancionService.getCanciones().subscribe(canciones => this.canciones= canciones);
  }*/

  goBack(): void {
    this.location.back();
  }
}
