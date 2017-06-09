import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';

/**
 * Generated class for the EstudiantetPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-estudiantet',
  templateUrl: 'estudiantet.html',
})
export class EstudiantetPage {
  cardItems: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private platform: Platform, private geolocation: Geolocation) {
    this.cardItems = [
    {
      titol: 'Portal del Jardí',
      image: 'assets/img/portal-del-jardi.jpg',
      content: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.',
      like: '12',
      coment: '4',
      coor: ['42.1371105','1.3']
    },
    {
      titol: 'Portal de la Canal',
      image: 'assets/img/portal-de-la-canal.jpg',
      content: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.',
      like: '32',
      coment: '42',
      coor: ['42.1371105','1.3']
    },
    {
      titol: 'Portal del carrer Estret',
      image: 'assets/img/carrer_estret_petit.jpg',
      content: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.',
      like: '17',
      coment: '3',
      coor: ['42.1371105','1.3']
    }
    ];
  }

}
