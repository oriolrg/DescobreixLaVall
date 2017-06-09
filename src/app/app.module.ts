import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { JocPage } from '../pages/joc/joc';
import { EstudiantetPage } from '../pages/estudiantet/estudiantet';
import { Geolocation } from '@ionic-native/geolocation';
import { PosicioTrackerProvider } from '../providers/posicio-tracker/posicio-tracker';
import { DatabaseProvider } from '../providers/database/database';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    JocPage,
    EstudiantetPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    JocPage,
    EstudiantetPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
    PosicioTrackerProvider,
    DatabaseProvider
  ]
})
export class AppModule {}
