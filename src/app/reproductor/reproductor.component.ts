import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})
export class ReproductorComponent implements OnInit {
  reproducir() {
      const audio = new Audio('assets/GetLucky.mp3');
      audio.play();
  }
  constructor() { }

  ngOnInit() {
  }

}
