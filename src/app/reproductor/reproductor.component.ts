import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})
export class ReproductorComponent implements OnInit {

audio;

  reproducir() {
    this.audio.play();


    var minutos = Math.round(this.audio.duration/60);
    var segundos = Math.round(((this.audio.duration/60)-minutos)*60);
    var Sminutos = minutos.toString();
    if(Sminutos.length < 2)
    Sminutos = "0" + Sminutos;
    var Ssegundos = segundos.toString();
    if(Ssegundos.length < 2)
    Ssegundos = "0" + Ssegundos;
    document.getElementById("duration").innerHTML = Sminutos + ":" + Ssegundos;

}


  pausa(){
    this.audio.pause();
  }

  stop(){
  this.audio.pause();
  this.audio.currentTime = 0;
  }





  constructor() {
    this.audio = new Audio('assets/GetLucky.mp3');
  }

  ngOnInit() {
  }

}
