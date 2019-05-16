import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

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
  }

}
