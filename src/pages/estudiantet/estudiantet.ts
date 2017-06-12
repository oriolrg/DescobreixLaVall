import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation, Coordinates} from '@ionic-native/geolocation';
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
  location: Coordinates;
  constructor(public navCtrl: NavController, private geolocation: Geolocation) {

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


      var options = {
        frequency : 1000,
        timeout: 3000,
        enableHighAccuracy: true
      };

      function onError(error) {
        //alert('code: '    + error.code    + '\n' +
        //'message: ' + error.message + '\n');
      }

      var onSuccess = function(position) {
        var latTest = 42.1372226;
        var lonTest = 1.5905914;
        var coorX = position.coords.latitude;
        var coorY = position.coords.longitude;
        document.getElementById("lat").textContent = coorX;
        document.getElementById("lon").textContent = coorY;
      };
      navigator.geolocation.watchPosition(onSuccess, onError, options);
      //Todo posició ara funciona correctament. Colocar-ho fora i afegir calcul distancia
    }



    //this.doSomething();


}
