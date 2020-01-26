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
  }

  isMenu = false;
  showMenu() {
      if(this.isMenu==false) this.isMenu = true;
      else this.isMenu = false;
  }

  isSett = false;
  showSettings() {
      if(this.isSett==false) this.isSett = true;
      else this.isSett = false;
  }

}
