import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Cancion } from './cancion';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const canciones = [
      {id:1, sTitle: 'Haz de luz', author: 'Rayden', style: 'Rap', year:2019, disc:'Poemas', prize:'0', shows:'Madrid'},
      {id:2, sTitle: 'Make it to Heaven', author: 'David Guetta', style: 'Tecno', year:2019, disc:'Go to glory', prize:'2', shows:'Retirado'},
      {id:3, sTitle: 'Early Days', author: 'Van Morrison', style: 'Swing', year:2001, disc:'Relax', prize:'7', shows:'Barcelona'},
      {id:4, sTitle: 'Loyal', author: 'Drake', style: 'Indie', year:2019, disc:'Coming back', prize:'3', shows:'Canadá'},
      {id:5, sTitle: 'Isla morenita', author: 'Carlos Sadness', style: 'Indie', year:2018, disc:'0', prize:'Isla Morenita', shows:'Menorca'},
      {id:6, sTitle: 'El caso de la rubia platino', author: 'Leiva', style: 'Indie', year:2019, disc:'Tributo Sabina', prize:'0', shows:'Desconocido'},
      {id:7, sTitle: 'Champion of the world', author: 'Coldplay', style: 'Pop', year:2017, disc:'Implosion', prize:'2', shows:'Desconocido'}
    ];
    return {canciones};
  }
  genId(canciones: Cancion[]): number {
    return canciones.length > 0 ? Math.max(...canciones.map(cancion => cancion.id)) + 1 : 11;
  }

}
