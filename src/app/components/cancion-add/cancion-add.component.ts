import { Component, OnInit } from '@angular/core';
import { TestsongService } from 'src/app/services/testsong.service';

@Component({
  selector: 'app-cancion-add',
  templateUrl: './cancion-add.component.html',
  styleUrls: ['./cancion-add.component.css']
})
export class CancionAddComponent implements OnInit {

  cancion:any = {
    sTitle:''
  }

  constructor(private _servicio: TestsongService) { }

  ngOnInit() {
  }

  addCancion(){
    this._servicio.addCancion(this.cancion);
    this.cancion.sTitle = '';
  }

}
