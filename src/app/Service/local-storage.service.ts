import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(private _router: Router) { }

  public userDetails;
  public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  setSession = (userDetails) => {
    this.userDetails = userDetails;
    this.isUserLoggedIn.next(true);
  }

  reset() {
    this.userDetails = undefined;
    this.isUserLoggedIn.next(false);
    this._router.navigate([`login`]);
  }

}
