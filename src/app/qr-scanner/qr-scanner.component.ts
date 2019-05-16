import { Component, OnInit, OnDestroy } from '@angular/core';
import QrScanner from './qr-scanner.min.js';

@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.component.html',
  styleUrls: ['./qr-scanner.component.css']
})
export class QrScannerComponent implements OnInit, OnDestroy {

  scanner;
  startOnWorkerInit = false;

  constructor() {
    this.initCameraWorker();
  }
  ngOnDestroy() {
    if(this.scanner == null){
      this.startOnWorkerInit = false;
    }
    else{
      this.scanner.stop();
      this.scanner.destroy();
      this.scanner = null;
      this.initCameraWorker();
    }
  }

  ngOnInit() {
    if(this.scanner == null){
      this.startOnWorkerInit = true;
    }
    else{
      this.scanner.start();
    }
  }

  initCameraWorker = function() {
    var video = document.getElementById("video")
    var body = document.getElementById('body')
    /*var st 
    navigator.mediaDevices.getUserMedia({video: true})
        .then(function(stream) {
            st = stream
            video.srcObject = stream
        })
        .catch(function(err) {
            console.error('INIT FAIL: ' + err)
        });  */
    QrScanner.hasCamera()
      .then(hasCamera => init())
      .catch(e => {
        console.error(e);
        displayErrorMesage("Camera is not suported in this brouser");
      })
    const init = function () {
      console.log(this)
      this.scanner = new QrScanner(video, result => {

        //pop up and wait redirect
      });
      
    }
    const displayErrorMesage = function (e) {
      var body = document.getElementById('body');
    }
  }

}
