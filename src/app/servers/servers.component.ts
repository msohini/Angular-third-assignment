import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: [`.spcolor{ color:white;}
    `]
})
export class ServersComponent implements OnInit {
  Isclicked = false;
  count = 0;
  buttonclick = [];
  constructor() { }

  ngOnInit() {
  }
  clicked() {
    this.count++;
    this.buttonclick.push(new Date());
    return this.Isclicked === false ? this.Isclicked = true : this.Isclicked = false;
  }
  AddClicks() {
    return this.Isclicked === false ? this.Isclicked = true : this.Isclicked = false;
  }
  getColor(c) {
    return c > 4 ? 'blue' : '';
  }
  
}
