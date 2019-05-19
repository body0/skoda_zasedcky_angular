import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from "../api.service"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() GlobaStateChange = new EventEmitter();

  constructor(private apiService: ApiService) { }

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
  search() {
    const searchBox:any = document.getElementById("searchBox");
    if (!isNaN(searchBox.value))
      this.apiService.getRoomInfo(parseInt(searchBox.value));
    else
      console.warn("not a integer in seach bar", searchBox.value)

  }
  changeGlobalState(newState: number) {

    this.GlobaStateChange.emit(newState);
  }

}
