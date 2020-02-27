import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestsongService {

  items: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.items = db.collection('canciones').valueChanges();
  }

  getSongs(){
    return this.items;
  }

  getASong(i){
   return this.items[i];
  }
}
