import { Component, OnInit, OnDestroy } from '@angular/core';
import QrScanner from './qr-scanner.min.js';

@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.component.html',
  styleUrls: ['./qr-scanner.component.css']
})
export class QrScannerComponent implements OnInit, OnDestroy{

  scanner;

  constructor() {
    var video = document.getElementById('video')
    //console.log(video)
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

    function init() {
        this.scaner = new QrScanner(video, result => {
        console.log(result);
        this.scanner.stop();
        //pop up and wait redirect
      });
      video.addEventListener('loadedmetadata', function (e) {
        //console.log(video.videoWidth, video.videoHeight, document.width);

        //body.style.width = video.videoWidth;
        //video.style.left = "calc(" + video.videoHeight + "px/-2 +" + document.width+"px)"
      });

    }
    function displayErrorMesage(e) {
      var body = document.getElementById('body');
    }
    function popUpWindow(Mesage) {
      var body = document.getElementById('body');
      body.after('<div class="popup">redirecting</div>');
    }
  }
  ngOnDestroy(){
    this.scanner.stop();
  }

  ngOnInit() {
    this.scanner.start();
  }

}
