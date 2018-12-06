import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ManageChecklistCollectionGuard implements CanActivate {

  constructor(private navCtrl: NavController, private storage: Storage) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    console.log('HomeGuard');

    this.storage.get('introShown').then((result) => {
      if (!result) {
        this.storage.set('introShown', true);
        this.navCtrl.navigateRoot('/intro');
        console.log('HomeGuard.canActivate:false');
        return false;
      }
    });

    console.log('HomeGuard.canActivate:true');
    return true;
  }
}
