
import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation, Coordinates} from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';
import { NgPipesModule } from 'ngx-pipes';
import {ReversePipe} from 'ngx-pipes/src/app/pipes/array/reverse';
import { DatabaseProvider } from '../../providers/database/database';
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
    //https://reviblog.net/2017/03/07/tutorial-de-ionic-2-crear-una-aplicacion-para-guardar-nuestros-sitios-geolocalizados-parte-2-mostrando-el-mapa/
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
      console.log(this.coords.lng);
      this.searchLocalitzacio(this.coords.lat,this.coords.lng);
    })
  }
  searchLocalitzacio(lat,lon){
    this.DatabaseProvider.getLocalitzacions(lat,lon).subscribe(
      data => {
        //let local = JSON.stringify(data['_body']);
        this.items = JSON.parse(data['_body']);

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
