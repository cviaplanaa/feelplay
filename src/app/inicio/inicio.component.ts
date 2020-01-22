import { Component, OnInit } from '@angular/core';
import { Cancion } from '../cancion';
import { CancionService } from '../cancion.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  canciones: Cancion[] = [];

    constructor(private cancionService: CancionService) { }

    ngOnInit() {
      this.getCanciones();
    }

    getCanciones(): void {
      this.cancionService.getCanciones()
        .subscribe(canciones => this.canciones = canciones.slice(1, 4));
    }
  }
