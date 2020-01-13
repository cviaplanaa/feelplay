import { Component, OnInit } from '@angular/core';
import { Cancion } from '../cancion';
import { CANCIONES } from '../lista-canciones';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.css']
})

export class CancionesComponent implements OnInit {
canciones = CANCIONES;
selectedSong: Cancion;

  constructor() { }

  ngOnInit() {
  }

  onSelect(cancion: Cancion): void {
    this.selectedSong = cancion;
  }
}
