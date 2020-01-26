import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isMonday = false;
  showMonday() {
      if(this.isMonday==false) this.isMonday = true;
      else this.isMonday = false;
  }
  isTuesday = false;
  showTuesday() {
      if(this.isTuesday==false) this.isTuesday = true;
      else this.isTuesday = false;
  }
  isWednesday = false;
  showWednesday() {
      if(this.isWednesday==false) this.isWednesday = true;
      else this.isWednesday = false;
  }
  isThursday = false;
  showThursday() {
      if(this.isThursday==false) this.isThursday = true;
      else this.isThursday = false;
  }
  isFriday = false;
  showFriday() {
      if(this.isFriday==false) this.isFriday = true;
      else this.isFriday = false;
  }

}
