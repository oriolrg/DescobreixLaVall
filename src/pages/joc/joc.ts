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
    var options: { timeout: number; enableHighAccuracy: boolean };

    options = {
      timeout: 3000,
      enableHighAccuracy: true
    };

    var onSuccess = function(position) {
      var latTest = 42.1372226;
      var lonTest = 1.5905914;
      var coorX = position.coords.latitude;
      var coorY = position.coords.longitude;
      document.getElementById("lat").textContent = coorX;
      document.getElementById("lon").textContent = coorY;
      var distancia = calcDistancia(coorX, coorY, latTest, lonTest);
      document.getElementById("difx").innerHTML = String(distancia*10000);
      estatSituacio(distancia);
    };

    var calcDistancia = function(coorX, coorY, latTest, lonTest){
      var difX = coorX-latTest;
      var difY = coorY-lonTest;
      var distancia = Math.sqrt( Math.pow(coorX-latTest,2) + Math.pow(coorY-lonTest,2) );
      sentit(coorX, coorY, latTest, lonTest)
      return distancia;
    };
    var estatSituacio = function(distancia){
      var marge = 0.0003100;
      if( distancia <= marge ){
        document.getElementById("Resultat").innerHTML="estas dintre";
      }else{

        document.getElementById("Resultat").innerHTML="estas fora";
      }
    }

    var sentit = function (coorX, coorY, latTest, lonTest) {
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
    // onError Callback receives a PositionError object
    //
    function onError(error) {
       //alert('code: '    + error.code    + '\n' +
             //'message: ' + error.message + '\n');
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
  }
  goToAbout(){
    alert("i");
    this.navCtrl.push(EstudiantetPage);
  }


};
