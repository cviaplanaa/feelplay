import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

import { Cancion } from '../cancion';
import { CancionService }  from '../cancion.service';

//Checkbox FormControl agrupar múltiple selección
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-cancion-detalle',
  templateUrl: './cancion-detalle.component.html',
  styleUrls: ['./cancion-detalle.component.css']
})
export class CancionDetalleComponent implements OnInit {
@Input() cancion: Cancion;

  items: Observable<any[]>;
  constructor(db: AngularFirestore,
    private route: ActivatedRoute,
    private cancionService: CancionService,
    private location: Location) {
    this.items = db.collection('canciones').valueChanges();
  }

  ngOnInit(): void {
  this.getCancion();
}

getCancion(): void {
  const id = +this.route.snapshot.paramMap.get('id');
  this.cancionService.getCancion(id)
    .subscribe(cancion => this.cancion = cancion);
  }

  goBack(): void {
    this.location.back();
  }
}