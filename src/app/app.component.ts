import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'skoda';
  globalState = 1;
  DEBUG_notSigned =  false;
  roomId = 64;
  DeferredPrompt;
  
  ngOnInit(): void {
    const sub = this;
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      sub.DeferredPrompt = e;
    });
  }
  changeState(state){
    if(this.DEBUG_notSigned) return;
    this.globalState = state;
  }
  changeRoomId(roomId){
    if(this.DEBUG_notSigned) return;
    this.roomId = roomId;
    this.globalState = 3;
    console.log("aaa", roomId)
  }

  changeStateAndSetRoomId(roomid){
    console.log("X",roomid)
    this.changeRoomId(roomid);
    this.changeState(3);
  }
  
  //ONLY FOR TESTING
  aut(){
    this.DEBUG_notSigned = !this.DEBUG_notSigned;
    var dimmer = document.getElementById("dim");
    dimmer.style.display = "none";
  }
}
