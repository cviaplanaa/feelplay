import { Component, OnInit } from '@angular/core';
import { Cancion } from '../cancion';
import { CANCIONES } from '../lista-canciones';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.css']
})

export class CancionesComponent implements OnInit {
  //Creamos una variable de tipo canciones que incluye la array creada en typescript
canciones = CANCIONES;
//Creamos la variable selectedSong de tipo cancion para poder mostrar detalles
selectedSong: Cancion;

  constructor() { }

  ngOnInit() {
  }

  onSelect(cancion: Cancion): void {
    this.selectedSong = cancion;
  }
}
