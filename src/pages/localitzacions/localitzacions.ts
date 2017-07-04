
import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation, Coordinates} from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';
import { NgPipesModule } from 'ngx-pipes';
import {ReversePipe} from 'ngx-pipes/src/app/pipes/array/reverse';
import { DatabaseProvider } from '../../providers/database/database';
import * as Constant from '../../providers/constants';
import 'rxjs/add/operator/map';


/**
 * Generated class for the LocalitzacionsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-localitzacions',
  templateUrl: 'localitzacions.html',
  providers: [ReversePipe]
})
export class LocalitzacionsPage {
  localitzacions: Array<any>;
  public items: any;
  //private coords: Coordinates = null;
  map: any;
  coords : any = { lat: 0, lng: 0 }
  constructor(
    private reversePipe: ReversePipe,
    public DatabaseProvider: DatabaseProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    private http:Http,
    private geolocation: Geolocation,
    public  platform: Platform
  ) {
    
    platform.ready().then(() => {
      // La plataforma esta lista y ya tenemos acceso a los plugins.
      this.obtenerPosicion();
      this.searchLocalitzacio(this.coords.lat,this.coords.lng);
    });
  }
  obtenerPosicion():any{
    this.geolocation.watchPosition().subscribe(res => {
      this.coords.lat = res.coords.latitude;
      this.coords.lng = res.coords.longitude;
      console.log(this.coords.lat);
      console.log(this.coords.lng);
      this.searchLocalitzacio(this.coords.lat,this.coords.lng);
    })
  }
  searchLocalitzacio(lat,lon){
    this.DatabaseProvider.getLocalitzacions(lat,lon).subscribe(
      data => {
        //SERVER_NAME_APP_TEST servidor online
        //SERVER_NAME_LOCAL servudor local
        //SERVER_NAME_PROXY proxy
        var url = Constant.SERVER_NAME_APP_TEST+'descobreix/coordenades/';
        this.items = JSON.parse(data['_body']);
        this.items.image = url+this.items.image;
        console.dir(this.items);
        },
				err => {
					console.log("Error: " + err);
				},
() => console.log('Movie Search Complete')
);
  }
  ionViewDidLoad() {
    //alert('ionViewDidLoad LocalitzacionsPage');
    this.searchLocalitzacio(this.coords.lat,this.coords.lng);
  }




}
