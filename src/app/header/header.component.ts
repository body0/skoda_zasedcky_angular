import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ApiService } from "../api.service"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() InstallDialog;
  @Output() GlobaStateChange = new EventEmitter();
  @Output() SearchId = new EventEmitter();
  Side;


  constructor(private apiService: ApiService) { }

  ngOnInit() {
    const menu = document.getElementById('sideMenu');
    const exit = document.getElementById('exitButton');
    this.Side = document.getElementById('sideBlock');

    menu.addEventListener("click", () => {
      this.Side.style.width = "60%";
    });

    exit.addEventListener("click", () => {
      this.Side.style.width = "0px";
    });
    this.Side.style.width = "0px"
  }
  tryCloseWindow(){
    this.Side.style.width = "0px";
  }
  search() {
    this.tryCloseWindow();
    const searchBox:any = document.getElementById("searchBox");
    console.log("Y",searchBox.value)
    this.SearchId.emit(searchBox.value)
    /* if (!isNaN(searchBox.value))
      this.SearchId.emit(parseInt(searchBox.value))
      //this.apiService.getRoomInfo(parseInt(searchBox.value));
    else
      console.warn("not a integer in seach bar", searchBox.value) */

  }
  changeGlobalState(newState: number) {
    this.tryCloseWindow();
    this.GlobaStateChange.emit(newState);
  }
  tryShowInstallDialog(){
    this.tryCloseWindow();
    if(this.InstallDialog != undefined)
      this.InstallDialog();
    else{
      alert("Feature not suported in this brouer")
      console.warn("PWA install dialog event fail")
    }
  }
}
