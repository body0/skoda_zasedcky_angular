import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  LoggedUserInfo:UserInfo = {
    name: "None",
    email: "None",
    expireDate: "2000-1-1"
  }

  LoginEndpointURL = "localhost:3000/api/login"
  //callback(upOoDown:boolean)
  LoginPopupCallback;

  constructor(private httpClient: HttpClient) { }


  login(name: string, password: string): boolean {
    if (this.LoginEndpointURL == null)
      return false
    this.LoginPopupCallback();
    this.httpClient.post(this.LoginEndpointURL, JSON.stringify({ name, password }))
      .toPromise()
      .then(res => {

      })
      .catch(msg => {

      })
  }
  getLogedUserInfo():UserInfo {
    return this.LoggedUserInfo;
  }
}

export class UserInfo {
  public name: string;
  public email: string;
  public expireDate: string;
}