import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as Constant from '../constants';

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
        //SERVER_NAME_APP_TEST servidor onlines
        //SERVER_NAME_LOCAL servudor local
        //SERVER_NAME_PROXY proxy
        var url = Constant.SERVER_NAME_APP_TEST+'descobreix/coordenades/';
        var response = this.http.get(url+lat+'/'+lon);
        console.log(url+lat+'/'+lon);
        return response;
    }


}
