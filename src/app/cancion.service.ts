import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Cancion } from './cancion';
//import { CANCIONES } from './lista-canciones';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CancionService {

 private cancionesUrl = 'api/canciones';  // URL to web api

 httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
 };

//Obtenemos canciones del servidor
  getCanciones(): Observable<Cancion[]> {
    return this.http.get<Cancion[]>(this.cancionesUrl)
    .pipe(
      catchError(this.handleError<Cancion[]>('getCanciones', []))
    );

}
//Obtenemos cancion por ID, devolverá indefinido si no lo encuentra
getCancionNo404<Data>(id: number): Observable<Cancion> {
    const url = `${this.cancionesUrl}/?id=${id}`;
    return this.http.get<Cancion[]>(url)
      .pipe(
        map(canciones => canciones[0]), // returns a {0|1} element array
        catchError(this.handleError<Cancion>(`getCancion id=${id}`))
      );
  }

//Obtenemos cancion por ID, sinoo va dará un 404
getCancion(id: number): Observable<Cancion> {
  const url = `${this.cancionesUrl}/${id}`;
  return this.http.get<Cancion>(url).pipe(
    catchError(this.handleError<Cancion>(`getCancion id=${id}`))
  );
}

/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

//Filtro por TÍTULO CANCIÓN
  searchCanciones(term: string): Observable<Cancion[]> {
    if (!term.trim()) {
      // if not search term, return empty song array.
      return of([]);
    }
    return this.http.get<Cancion[]>(`${this.cancionesUrl}/?sTitle=${term}`).pipe();
  }

  constructor(
  private http: HttpClient) { }
}
