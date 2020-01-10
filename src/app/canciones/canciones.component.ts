import { Component, OnInit } from '@angular/core';
import {Cancion} from '../cancion';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.css']
})
export class CancionesComponent implements OnInit {
cancion: Cancion={
  sTitle: 'Isla morenita',
  author: 'Carlos Sadness',
  year: '2019',
  disc: 'Caminando',
  style: 'indie'
}
  constructor() { }

  ngOnInit() {
  }

}
