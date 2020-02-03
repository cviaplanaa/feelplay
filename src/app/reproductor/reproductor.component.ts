import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})
export class ReproductorComponent implements OnInit {

  audio;
  songTimeBar = 0;
  MAXsongTimeBar = 0;
  songTimeChrono = "00:00";
  MaxsongTimeChrono = "00:00";

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
    this.MaxsongTimeChrono = Sminutos + ":" + Ssegundos;
    document.getElementById("duration").innerHTML = this.MaxsongTimeChrono

    this.audio.addEventListener("timeupdate", (currentTime)=>{
        this.MAXsongTimeBar = this.audio.duration;
        this.songTimeBar = this.songTimeBar;
        this.songTimeBar = this.audio.currentTime;
        var minutos = Math.round(this.audio.currentTime/60);
        var segundos = Math.round(this.audio.currentTime) - minutos * 60;
        var Sminutos = minutos.toString();
        if(Sminutos.length < 2)
        Sminutos = "0" + Sminutos;
        var Ssegundos = segundos.toString();
        if(Ssegundos.length < 2)
        Ssegundos = "0" + Ssegundos;
        this.songTimeChrono = Sminutos + ":" + Ssegundos;
    });
  }

  onSliderChange(event: MatSliderChange) {
     this.audio.currentTime = (event.value);
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
