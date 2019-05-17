import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from "../api.service"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() GlobaStateChange = new EventEmitter();

  constructor(private apiService:ApiService ) { }

  ngOnInit() {
    const menu = document.getElementById('sideMenu');
    const exit = document.getElementById('exitButton');
    const side = document.getElementById('sideBlock');

    menu.addEventListener("click", () => {
        side.style.width = "60%";
    });

    exit.addEventListener("click", () => {
        side.style.width = "0px";
    });
    side.style.width = "0px"
  }
  search(){
    const searchBox = document.getElementById("searchBox");
    console.log("in")
    this.apiService.getRoomInfo("1");
  }
  changeGlobalState(newState: number){
    
    this.GlobaStateChange.emit(newState);
  }

}
