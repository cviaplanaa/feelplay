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

  canciones: Observable<any[]>;
  //item: any[] = [];

  constructor(
    private _servicio: TestsongService,
    private location: Location
  ) {
    this.canciones = _servicio.getSongs();
   }

  ngOnInit() {
    //this.getCanciones();
  }
/*
  getCanciones(): void {
    this.cancionService.getCanciones().subscribe(canciones => this.canciones= canciones);
  }*/

  goBack(): void {
    this.location.back();
  }
}
