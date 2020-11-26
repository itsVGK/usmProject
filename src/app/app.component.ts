import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from './Service/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public title = 'customAng';
  public isLoggedIn;

  constructor(private _router: Router, private _service: LocalStorageService) {
    _service.isUserLoggedIn.subscribe(val => this.isLoggedIn = val);
  }

  logout = () => {
    this._service.reset();
    // this._router.navigate(['login']);
  }

}
