import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  public baseUrl = `http://localhost:3000/api/v1`;

  deleteUserbyEmail = (email) => {

    let params = new HttpParams()
      .set('email', email)

    return this._http.post(`${this.baseUrl}/deleteUser`, params);
  }

  fetchReportByDesignation = (designation) => {

    let params = new HttpParams()
      .set('designation', designation)

    return this._http.post(`${this.baseUrl}/fetchreport`, params);
  }

  registerUserService = (userDetails) => {
    let params = new HttpParams()
      .set('name', userDetails.name)
      .set('gender', userDetails.gender)
      .set('mobile', userDetails.mobile)
      .set('email', userDetails.email)
      .set('designation', userDetails.designation)
      .set('password', userDetails.password)

    return this._http.post(`${this.baseUrl}/register`, params);
  }

  loginUser = (userDetails) => {

    let isEmail = isNaN(parseInt(userDetails.userId)) ? true : false;
    let params = new HttpParams()
      .set((isEmail) ? 'email' : 'mobile', userDetails.userId)
      .set('password', userDetails.userPassword)
    return this._http.post(`${this.baseUrl}/login`, params);
  }
  
}
