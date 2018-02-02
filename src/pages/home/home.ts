import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ANIMALES } from '../../data/data.animales';
import { Animal } from '../../models/animal.interface';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public animales: Animal[] = [];
  public audio = new Audio();
  public audioTiempo : any;

  constructor(public navCtrl: NavController) {
        this.animales = ANIMALES.slice(0);

  }


  reproducir( animal:Animal){

          this.pausarAudio( animal );

          if(animal.reproduciendo ){
             animal.reproduciendo = false;
             return;
          }

          let audio = new Audio();
          this.audio.src = animal.audio;

          this.audio.load();
          this.audio.play();

          animal.reproduciendo = true;


          setTimeout( () =>  animal.reproduciendo = false, animal.duracion * 1000 );


  }

  private pausarAudio( animalSel: Animal ){

          clearTimeout( this.audioTiempo );

          this.audio.pause();
          this.audio.currentTime = 0;

          for( let animal of  this.animales){
               if(animal.nombre != animalSel.nombre ){
                    animal.reproduciendo = false;
               }
          }

  }


}
