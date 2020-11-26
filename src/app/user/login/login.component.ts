import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/Service/http.service';
import { LocalStorageService } from 'src/app/Service/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output()
  triggerLogoutFn = new EventEmitter<boolean>();

  constructor(private _router: Router, private _lsService: LocalStorageService,
    private _httpService: HttpService) { }

  ngOnInit(): void {

  }

  public loginForm = new FormGroup({
    userId: new FormControl('', [Validators.required]),
    userPassword: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  login() {

    if (this.loginForm.status === 'VALID') {
      this._httpService.loginUser(this.loginForm.value).subscribe((isLoggedin: any) => {
        if (!isLoggedin.error) {
          this._lsService.setSession(isLoggedin.data);
          this._router.navigate([`internal`]);
        } else {
          alert(isLoggedin.message)
        }
      })
    }

  }

}
