import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Cancion { 
  sTitle: string;
  author: string;
  disc: string;
  id: number;
  mp3: string;
  prize: number;
  shows: string;
  style: string;
  year: number;
}

@Injectable({
  providedIn: 'root'
})
export class TestsongService {

  private cancionesCollection: AngularFirestoreCollection<Cancion>;
  
  canciones: Observable<Cancion[]>;

  private itemDoc: AngularFirestoreDocument<Cancion>;

  constructor( 
    private afs: AngularFirestore
    //db: AngularFirestore
    ) {
      this.cancionesCollection = afs.collection<Cancion>('canciones');
      this.canciones = this.cancionesCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Cancion;
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );
    }

  getSongs(){
    return this.canciones;
  }

  getASong(i){
   return this.canciones[i];
  }

  addCancion(cancion: Cancion){
    this.cancionesCollection.add(cancion);
  }

  deleteCancion(cancion){
    this.itemDoc = this.afs.doc<Cancion>(`canciones/${cancion.id}`);
    this.itemDoc.delete();
  }
}
