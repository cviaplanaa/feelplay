import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Cancion } from '../cancion';
import { CancionService } from '../cancion.service';


@Component({
  selector: 'app-cancion-search',
  templateUrl: './cancion-search.component.html',
  styleUrls: ['./cancion-search.component.css']
})
export class CancionSearchComponent implements OnInit {

    canciones$: Observable<Cancion[]>;
    private searchTerms = new Subject<string>();

    constructor(private cancionService: CancionService) {}

    // Push a search term into the observable stream.
      search(term: string): void {
        this.searchTerms.next(term);
      }

      ngOnInit(): void {
        this.canciones$ = this.searchTerms.pipe(
          // wait 300ms after each keystroke before considering the term
          debounceTime(300),

          // ignore new term if same as previous term
          distinctUntilChanged(),

          // switch to new search observable each time the term changes
          switchMap((term: string) => this.cancionService.searchCanciones(term)),
        );
      }

}
