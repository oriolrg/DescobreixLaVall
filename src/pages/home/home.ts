import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { JocPage } from '../joc/joc';
import { EstudiantetPage } from '../estudiantet/estudiantet';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
        //this.navCtrl = navCtrl;
  }
  goToAbout(){
        this.navCtrl.push(JocPage);
  }
  goToAboutEstudiantet(){
        this.navCtrl.push(EstudiantetPage);
  }

}
