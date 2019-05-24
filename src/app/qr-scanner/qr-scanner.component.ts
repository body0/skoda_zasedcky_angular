import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import QrScanner from '../../assets/qr-scanner.min.js';
import { strictEqual } from 'assert';

@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.component.html',
  styleUrls: ['./qr-scanner.component.css']
})
export class QrScannerComponent implements OnInit, OnDestroy {

  scanner;
  @Output() GlobaStateChange = new EventEmitter(); 
  @Output() SetRoomId = new EventEmitter(); 

  constructor() {

  }
  ngOnDestroy() {
    this.scanner.stop();
    this.scanner.destroy();
    this.scanner = null;
  }
  changeGlobalState(newState: number) {
    this.GlobaStateChange.emit(newState);
  }

  ngOnInit() {
    console.log(this)
    if (this.scanner != undefined) {
      this.scanner.start();
    }
    else {
      
      var video = document.getElementById("video")
      var body = document.getElementById('body')
     
      var sup = this;
      QrScanner.hasCamera()
        .then(hasCamera => init())
        .catch(e => {
          console.error(e);
          displayErrorMesage("Camera is not suported in this brouser");
        })
      const init = function () {
        console.log(sup)
        sup.scanner = new QrScanner(video, result => {
          console.log("A"+result+"A");
          //console.log(parseInt(result));
          /* console.log("A"+result+"A");
          var myRegexp = /^room_id:(\d+)\r\n$/g;
          //var myRegexp = new RegExp("^(.*)$");
          console.log(result.match(myRegexp))
          if(myRegexp.test(result)){
          
            
            this.SetRoomId.emit(result.match(myRegexp)[0])
          } */
          sup.SetRoomId.emit(String(result))
          sup.scanner.stop();
          //pop up and wait redirect
        });
        sup.scanner.start();
      }
      const displayErrorMesage = function (e) {
        var body = document.getElementById('body');
      }
      const popUpWindow = function (Mesage) {
        var body = document.getElementById('body');
        body.after('<div class="popup">redirecting</div>');
      }
    }


  }

}
