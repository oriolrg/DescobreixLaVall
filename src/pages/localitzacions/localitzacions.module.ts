import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocalitzacionsPage } from './localitzacions';

@NgModule({
  declarations: [
    LocalitzacionsPage,
  ],
  imports: [
    IonicPageModule.forChild(LocalitzacionsPage),
  ],
  exports: [
    LocalitzacionsPage
  ]
})
export class LocalitzacionsPageModule {}
