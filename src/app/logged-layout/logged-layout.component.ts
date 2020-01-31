import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-logged-layout',
  templateUrl: './logged-layout.component.html',
  styleUrls: ['./logged-layout.component.css']
})
export class LoggedLayoutComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    let width = window.innerWidth;
    if(width >= 1024) this.isMenu = true;
    else this.isMenu = false;
  }

  isMenu = true;
  showMenu() {
    if(this.isMenu==false) this.isMenu = true;  //// DO POPRAWIENIA !!!!
    else this.isMenu = false;   
  }

  isSett = false;
  isCog = !this.isSett;
  showSettings() {
    this.isSett = !this.isSett;
    this.isCog = !this.isCog;
  }

}
