import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';
import { EstudiantetPage } from '../estudiantet/estudiantet';

/**
 * Generated class for the JocPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-joc',
  templateUrl: 'joc.html',
})
export class JocPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, private platform: Platform, private geolocation: Geolocation) {
  var calcDistancia = function(coorX, coorY){
    var latTest = 42.1372226;
    var lonTest = 1.5905914;
    var difX = coorX-latTest;
    var difY = coorY-lonTest;
    var distancia = Math.sqrt( Math.pow(coorX-latTest,2) + Math.pow(coorY-lonTest,2) );
    return distancia;
  };
  var estatSituacio = function(distancia){
    var marge = 0.0003100;
    if( distancia <= marge ){
      return 1;
    }else{

      return 0;
    }
  }
  var options = { timeout: 3000, enableHighAccuracy: true };
  var onSuccess = function(position) {
      var coorX = position.coords.latitude;
      var coorY = position.coords.longitude;
      document.getElementById("lat").textContent = coorX;
      document.getElementById("lon").textContent = coorY;
      var distancia = calcDistancia(coorX, coorY);
      document.getElementById("difx").innerHTML = String(distancia);
      if(estatSituacio(distancia)){
        document.getElementById("Resultat").innerHTML="estas dintre";
      }else{
        document.getElementById("Resultat").innerHTML="estas fora";
      }

   };

   // onError Callback receives a PositionError object
   //
   function onError(error) {
       //alert('code: '    + error.code    + '\n' +
             //'message: ' + error.message + '\n');
   }

   navigator.geolocation.watchPosition(onSuccess, onError, options);
  }
  goToAbout(){
  alert("i");
        this.navCtrl.push(EstudiantetPage);
    }

};
