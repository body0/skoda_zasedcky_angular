import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-still-button',
  templateUrl: './still-button.component.html',
  styleUrls: ['./still-button.component.css']
})
export class StillButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const qrButton = document.getElementById("qrButton");
    const content = document.getElementById("content");
    var redirectUrl
    if(content.hasAttribute("redirect"))
      redirectUrl = content.attributes.getNamedItem("redirect");
    qrButton.addEventListener('click', () => {
      if(redirectUrl)
        window.location.href = window.location.origin + redirectUrl;
    });
  }

}
