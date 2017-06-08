import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JocPage } from './joc';

@NgModule({
  declarations: [
    JocPage,
  ],
  imports: [
    IonicPageModule.forChild(JocPage),
  ],
  exports: [
    JocPage
  ]
})
export class JocPageModule {}
