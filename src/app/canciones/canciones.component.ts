import { Component, OnInit } from '@angular/core';
import { Cancion } from '../cancion';
import { Location } from '@angular/common';
import { CancionService } from '../cancion.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.css']
})

export class CancionesComponent implements OnInit {
  //Creamos una variable de tipo canciones que incluye la array creada en typescript
//canciones = CANCIONES;
canciones: Cancion[];

  items: Observable<any[]>;
  constructor(db: AngularFirestore, private cancionService: CancionService, private location: Location) {
    this.items = db.collection('canciones').valueChanges();
  }

  ngOnInit() {
    this.getCanciones();
  }

  getCanciones(): void {
  this.cancionService.getCanciones().subscribe(canciones => this.canciones= canciones);
}
goBack(): void {
  this.location.back();
}


}
