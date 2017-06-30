import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import {ReversePipe} from 'ngx-pipes/src/app/pipes/array/reverse';
import {NgPipesModule} from 'ngx-pipes';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { JocPage } from '../pages/joc/joc';
import { EstudiantetPage } from '../pages/estudiantet/estudiantet';
import { LocalitzacionsPage } from '../pages/localitzacions/localitzacions';
import { Geolocation } from '@ionic-native/geolocation';
import { PosicioTrackerProvider } from '../providers/posicio-tracker/posicio-tracker';
import { DatabaseProvider } from '../providers/database/database';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    JocPage,
    EstudiantetPage,
    LocalitzacionsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    NgPipesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    JocPage,
    EstudiantetPage,
    LocalitzacionsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
    PosicioTrackerProvider,
    DatabaseProvider,
    HttpModule,
    ReversePipe
  ]
})
export class AppModule {}
