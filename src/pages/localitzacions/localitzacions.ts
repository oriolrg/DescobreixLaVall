
import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  constructor(private reversePipe: ReversePipe, public DatabaseProvider: DatabaseProvider, public navCtrl: NavController, public navParams: NavParams,private http:Http) {

  }
  searchLocalitzacio(lon,lat){
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
    console.log('ionViewDidLoad LocalitzacionsPage');
    this.searchLocalitzacio(1.234,12.444);
  }
  



}
