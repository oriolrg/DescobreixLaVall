import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DatabaseProvider {

  static get parameters() {
          return [[Http]];
      }
  constructor(private http:Http) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocalitzacionsPage');
  }
  getLocalitzacions(lat,lon) {
        //var url = 'http://localhost:8000/descobreix/coordenades/12.444/1.234' ;
        //Per app_id
        var url = 'http://192.168.1.55/descobreix/coordenades/';
        //Per local
        //var url ='/descobreix/coordenades/';
        var response = this.http.get(url+lat+'/'+lon);
        console.log(url);
        return response;
    }


}
