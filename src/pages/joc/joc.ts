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
  constructor(public navCtrl: NavController, private geolocation: Geolocation) {
    
  }


};
