import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-about-app',
  templateUrl: './about-app.component.html',
  styleUrls: ['./about-app.component.css']
})
export class AboutAppComponent implements OnInit {

  @Output() GlobaStateChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  changeGlobalState(newState: number) {
    this.GlobaStateChange.emit(newState);
  }
}
