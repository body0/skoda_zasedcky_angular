import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'skoda';
  globalState = 1;
  DEBUG_notSigned =  false;
  roomId = 64;
  
  changeState(stete){
    if(this.DEBUG_notSigned) return;
    this.globalState = stete;
  }
  changeRoomId(roomId){
    if(this.DEBUG_notSigned) return;
    this.roomId = roomId;
    this.globalState = 3;
    console.log("aaa", roomId)
  }
  
  aut = function(){
    this.DEBUG_notSigned = !this.DEBUG_notSigned;
    var dimmer = document.getElementById("dim");
    dimmer.style.display = "none";
  }
}
