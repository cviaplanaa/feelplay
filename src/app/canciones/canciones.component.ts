import { Component, OnInit } from '@angular/core';
import { Cancion } from '../cancion';
import { CANCIONES } from '../lista-canciones';
import { CancionService } from '../cancion.service';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.css']
})

export class CancionesComponent implements OnInit {
  //Creamos una variable de tipo canciones que incluye la array creada en typescript
//canciones = CANCIONES;
canciones: Cancion[];

  constructor(private cancionService: CancionService) { }

  ngOnInit() {
    this.getCanciones();
  }

  getCanciones(): void {
  this.cancionService.getCanciones().subscribe(canciones => this.canciones= canciones);
}


}
