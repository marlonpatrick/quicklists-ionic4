import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { error } from '@angular/compiler/src/util';

const { SplashScreen, StatusBar } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  constructor() {
    this.initializeApp();
  }

  initializeApp() {
    SplashScreen.hide().catch(err => console.warn(err));

    StatusBar.hide().catch(err => console.warn(err));
  }
}
