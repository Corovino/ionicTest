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

  constructor(public navCtrl: NavController) {
        this.animales = ANIMALES.slice(0);

  }

}
