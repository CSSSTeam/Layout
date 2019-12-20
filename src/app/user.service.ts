import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import * as data from '../config.json';


@Injectable()
export class UserService{

  dataURL;
  constructor(private http: HttpClient) {
    this.dataURL = (data as any).default;
  }
  loginUser(userData) {
    const url = this.dataURL.server + this.dataURL.endpoints.login;
    return this.http.post(url, userData);
  }

  public createUser(token) {
    User.instance = new User(token,this);
  }
  getProfilUser(token): Observable<any> {
    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'token ' + token
      })
    };
    return this.http.post(this.dataURL.server + this.dataURL.endpoints.infoUser,{} , httpOption);
  }
}
export class User {
  public static instance: User;
  firstName: '';
  LastName: '';
  username: '';
  lastLogin: '';
  token: '';

  constructor(token, userService: UserService) {
    this.token = token;
    userService.getProfilUser(token).subscribe(
      () => console.log("success"),
      error => console.log(error)
    )

  }

}
