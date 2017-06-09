import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';
import 'rxjs/add/operator/map';

/*
  Generated class for the PosicioTrackerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PosicioTrackerProvider {

  constructor(private geolocation: Geolocation) {
    var onSuccess: (position) => any;
    var options: { timeout: number; enableHighAccuracy: boolean };
    var estatSituacio: (distancia) => any;
    var calcDistancia: (coorX, coorY) => number;
    var sentit: (coorX, coorY) => any;
    let latTest = 42.1372226;
    let lonTest = 1.5905914;
    let coorX: any;
    let coorY: any;
    options = {timeout: 3000, enableHighAccuracy: true};
    onSuccess = function (position) {
      coorX = position.coords.latitude;
      coorY = position.coords.longitude;
      document.getElementById("lat").textContent = coorX;
      document.getElementById("lon").textContent = coorY;
      var distancia = calcDistancia(coorX, coorY);
      document.getElementById("difx").innerHTML = String(Math.trunc(distancia*100000) + "m");
      estatSituacio(distancia);

    };

    // onError Callback receives a PositionError object
    //
    function onError(error) {
      //alert('code: '    + error.code    + '\n' +
      //'message: ' + error.message + '\n');
    }

    calcDistancia = function (coorX, coorY) {
      let distancia = Math.sqrt(Math.pow(coorX - latTest, 2) + Math.pow(coorY - lonTest, 2));
      return distancia;
    };

    estatSituacio = function (distancia) {
      let marge = 0.0003100;
      if (distancia <= marge) {
        document.getElementById("Resultat").innerHTML = "estas dintre";;
      } else {

        sentit(coorX, coorY);
        document.getElementById("Resultat").innerHTML = "estas fora";
      }
    };

    sentit = function (coorX, coorY) {
      var x = coorX - latTest;
      var y = coorY - lonTest;
      var sentit : string;
      if(x < 0 && y < 0){
        sentit = "Nord Est";
      }else if(x == 0 && y < 0){
        sentit = "Nord";
      }else if(x > 0 && y < 0){
        sentit = "Nord Oest";
      }else if(x > 0 && y == 0){
        sentit = "Oest";
      }else if(x < 0 && y == 0){
        sentit = "Est";
      }else if(x == 0 && y == 0){
        sentit = "pestu";
      }else if(x > 0 && y > 0){
        sentit = "Sud Oest";
      }else if(x < 0 && y > 0){
        sentit = "Sud Est";
      }else if(x = 0 && y > 0){
        sentit = "Sud";
      }
      document.getElementById("sentit").innerHTML = sentit;
    }

    navigator.geolocation.watchPosition(onSuccess, onError, options);
  }

}
