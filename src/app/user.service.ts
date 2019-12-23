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
    return this.http.get(this.dataURL.server + this.dataURL.endpoints.infoUser , httpOption);
  }
}
export class User {
  public static instance: User;
  firstName: '';
  lastName: '';
  username: '';
  email: '';
  token: '';

  constructor(token, userService: UserService) {
    userService.getProfilUser(token).subscribe(
      (data:any) => {
        this.firstName = data.FirstName;
        this.lastName = data.LastName;
        this.email = data.Email;
        this.token = token;
      },
      error => console.log(error)
    )


  }

}
