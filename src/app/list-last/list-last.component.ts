import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-last',
  templateUrl: './list-last.component.html',
  styleUrls: ['./list-last.component.css']
})
export class ListLastComponent implements OnInit {

  @Output() GlobaStateChange = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  changeGlobalState(newState: number) {
    this.GlobaStateChange.emit(newState);
  }

}
