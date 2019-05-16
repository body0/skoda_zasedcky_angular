import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'skoda';
  globalState = 2;
  DEBUG_notSigned =  true;
  changeState = function(stete){
    if(this.DEBUG_notSigned) return;
    this.globalState = stete;
  }
  aut = function(){
    this.DEBUG_notSigned = !this.DEBUG_notSigned;
    var dimmer = document.getElementById("dim");
    dimmer.style.display = "none";
  }
}
