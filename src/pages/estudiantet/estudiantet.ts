import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Geolocation, Coordinates} from '@ionic-native/geolocation';

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

    var cardItems = [
      {
        titol: 'Portal del Jardí',
        image: 'assets/img/portal-del-jardi.jpg',
        content: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.',
        like: '12',
        coment: '4',
        coor: ['42.136617','1.5908918'],
        dist: 25
      },
      {
        titol: 'Portal de la Canal',
        image: 'assets/img/portal-de-la-canal.jpg',
        content: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.',
        like: '32',
        coment: '42',
        coor: ['42.137622','1.5906158'],
        dist: 35
      },
      {
        titol: 'Portal del carrer Estret',
        image: 'assets/img/carrer_estret_petit.jpg',
        content: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.',
        like: '17',
        coment: '3',
        coor: ['42.137477','1.591435'],
        dist: 15
      }
    ];
      var coordenades ;
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

        var latTest = 42.137477;
        var lonTest = 1.591435;
        //alert(cardItems[0].titol);
        coordenades = position.coords;
        document.getElementById("lat").textContent = coordenades.latitude;
        document.getElementById("lon").textContent = coordenades.longitude;
        var distancia = calcDistancia(coordenades.latitude, coordenades.longitude, latTest, lonTest)*100000;
        //TODO mostrar els mes proxims a la posicio, assignar distancia a carditems
        //this.cardItems[2].dist = 55;

        if(distancia <= 50 ){
          document.getElementById("dist").innerHTML = String(distancia);
        }else{
          document.getElementById("dist").innerHTML = String(distancia);
        }
      };

      navigator.geolocation.watchPosition(onSuccess, onError, options);
      //Todo posició ara funciona correctament. Colocar-ho fora i afegir calcul distancia
      //console.log(coorX);
      var calcDistancia = function(coorX, coorY, latTest, lonTest){
        var difX = coorX-latTest;
        var difY = coorY-lonTest;
        var distancia = Math.sqrt( Math.pow(coorX-latTest,2) + Math.pow(coorY-lonTest,2) );
        //sentit(coorX, coorY, latTest, lonTest)
        return distancia;
      };
      function compare(a, b) {
        // Use toUpperCase() to ignore character casing
        const genreA = a.dist;
        const genreB = b.dist;

        let comparison = 0;
        if (genreA > genreB) {
          comparison = 1;
        } else if (genreA < genreB) {
          comparison = -1;
        }
        return comparison;
      }
      this.cardItems = cardItems.sort(compare);
    }



    //this.doSomething();


}
