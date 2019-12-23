import {Component, OnInit} from '@angular/core';
import {UserService,User} from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService]
})
export class AppComponent implements OnInit{
  title = 'csssFrontend';
  loginForm;
  errorForm;
  constructor(private userService:UserService) {
  }
  ngOnInit() {
    this.loginForm = {
      username:"",
      password:""
    };
    this.errorForm = {
      global:"",
      username:"",
      password:""
    }
  }

  login() {
    this.userService.loginUser(this.loginForm).subscribe(
      (data:any)=>{
        this.userService.createUser(data.token);
        console.log(User.instance);
      },
      error => this.loginError(error.error)
    );

  }

  private loginError(error: any) {
      if(error.non_field_errors != null || error.non_field_errors !== 'undefined') {
        this.errorForm.global = error.non_field_errors;
      }
      if(error.username != null && error.username !== 'undefined') {
        this.errorForm.username = error.username;
      }
      if(error.password != null && error.password !== 'undefined') {
        this.errorForm.password = error.password;
      }
      console.log(error);
  }

  displayError(text: string) {
    if(text != null && text !== 'undefined'){
      return text;
    }
    return "";
  }
}
