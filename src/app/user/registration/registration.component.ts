import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/Service/http.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private _router: Router, private _httpService: HttpService) { }
  public registerUserForm;
  public designationGrp;

  ngOnInit(): void {

    this.registerUserForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')]),
      email: new FormControl('', [Validators.email, Validators.required]),
      designation: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    })

    this.designationGrp = [
      { name: "Staff", value: "S" },
      { name: "Manager", value: "M" },
      { name: "Admin", value: "A" },
    ]
  }

  registerUser = () => {
    if (this.registerUserForm.status === 'VALID')

      this._httpService.registerUserService(this.registerUserForm.value).subscribe((isUserSaved: any) => {
        if (!isUserSaved.error) {
          this._router.navigate(['\login']);
        } else {
          alert(isUserSaved.message);
        }
      })

    else
      alert('Provide all the required details');
  }

}
