import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-room-info',
  templateUrl: './room-info.component.html',
  styleUrls: ['./room-info.component.css']
})
export class RoomInfoComponent implements OnInit {

  moreInfoMode:boolean = false;
  moreFaultsMode:boolean = false;
  RoomInfo = {}   
  

  constructor(private apiServise: ApiService) {
    
  }
  @Input("RoomID")
  set RoomID(RoomID) {
    this.apiServise.getRoomInfo(RoomID)
      .then((res) => {
        res.utility = res.utility.map( (val)=> {
          return '../../assets/img/utility/' + val + '.png';
        })
        this.RoomInfo = res;
      })
  }
  @Input("RoomSchedule")
  set RoomSchedule(RoomSchedule) {
    this.apiServise.getRoomInfo(RoomSchedule)
      .then((res) => {
        this.RoomInfo = res;
      })
  }
  ngOnInit() {
  }
  moreInfo(){
    this.moreInfoMode = !this.moreInfoMode;
  }
  moreFaults(){
    this.moreFaultsMode = !this.moreFaultsMode;
  }
  showSchedule(){

  }

}
