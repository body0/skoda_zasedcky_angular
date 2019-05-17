import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-room-info',
  templateUrl: './room-info.component.html',
  styleUrls: ['./room-info.component.css']
})
export class RoomInfoComponent implements OnInit {

  
  RoomInfo = {}

  constructor(private apiServise:ApiService) {
    
   }
   @Input("RoomID") 
   set RoomID (RoomID){
     console.log("ZR", RoomID)
     this.apiServise.getRoomInfo(RoomID)
    .then( (res) => {
      this.RoomInfo = res;
    })
   }
  ngOnInit() {
  }

}
