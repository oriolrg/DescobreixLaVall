import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstudiantetPage } from './estudiantet';

@NgModule({
  declarations: [
    EstudiantetPage,
  ],
  imports: [
    IonicPageModule.forChild(EstudiantetPage),
  ],
  exports: [
    EstudiantetPage
  ]
})
export class EstudiantetPageModule {}
