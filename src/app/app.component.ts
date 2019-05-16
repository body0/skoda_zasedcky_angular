import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'skoda';
  globalState = 1;
  changeState = function(stete){
    this.globalState = stete;
  }
}
