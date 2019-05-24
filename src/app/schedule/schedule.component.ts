import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { ApiService, Meeting, SheduleData } from '../api.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit, AfterViewInit {

  WiewWidth = 2;
  StyleBypass = ['calc(', '*', ')']
  WiewsData = [];
  ScheduleList = [];

  @Input() RoomName: string;
  /* [ //wiew slide
    {
      time: <time to display>
      data:[ //meeting div
        {
          start: <hours from element start>
          meetingLength: <leingh of meeting in hours
          name: <name of meeting>
          owner: <email>

        }
      ] 
    }
     
  ] */
  constructor(
    private apiServise: ApiService,
    private sanitizer: DomSanitizer
  ) {
    for (let i = 0; i < 24; i++) {//23:30 - 23:30
      this.WiewsData.push({
        time: i,
        data: []
      })
    }

  }

  ngOnInit() {

  }
  showMeetingInfo(id:number){

  }
  ngAfterViewInit(): void {
    // move sliding window to position of curent time
    const date = new Date();
    const scroll = date.getHours() + date.getMinutes() / 60;

    const wiewBox = document.getElementById("wiewBox");
    var RawData;
    var sub = this;
    //console.log("X",this.RoomName)
    this.apiServise.getRoomSchedule(this.RoomName)
      .then((data: SheduleData) => {
        RawData = data;
        if(!data.id_found) {
          for (let i = 0; i < 24; i++) {//23:30 - 23:30
            this.WiewsData.push({
              time: i,
              data: []
            })
          }
          this.ScheduleList = []
          return;
        }
        //console.log("V",data.schedule_list)
        data.schedule_list.forEach((val, i) => {

          const start = new Date(new Date(val.start).getTime() +new Date(val.start).getTimezoneOffset() *1000 *60);
          const end = new Date(new Date(val.end).getTime() +new Date(val.start).getTimezoneOffset() *1000 *60);
          const dateDiff = end.getTime() - start.getTime();
          console.log(wiewBox.clientWidth, dateDiff, dateDiff / 3600000, start.getHours(), new Date(val.start))
          this.WiewsData[start.getHours()].data.push({
            id: i,
            name: val.name,
            owner: val.owner,
            start: wiewBox.clientWidth * (start.getMinutes() / 60 + ((true) ? 0.5 : 0)),
            meetingLength: wiewBox.clientWidth * (dateDiff / 3600000)//(1000 *60 *60) 
          })
          this.ScheduleList.push(val);
        })
      })

    console.log("time ", wiewBox.clientWidth)
    wiewBox.scroll(wiewBox.clientWidth * scroll + ((scroll < 23.5) ? 0.5 : 0), 0); // -0.5 center curent time if time below 23:30
    
    
    window.onresize = function (event) {
      if(RawData == undefined) return;

      document.querySelectorAll("div.record").forEach( (val) => {
        val.parentNode.removeChild(val);
      })

      RawData.schedule_list.forEach((val) => {
        const start = new Date(val.start);
        const end = new Date(val.end);
        const dateDiff = end.getTime() - start.getTime();
        console.log(wiewBox.clientWidth, dateDiff, dateDiff / 3600000)
        sub.WiewsData[start.getHours()].data.push({
          start: wiewBox.clientWidth * (start.getMinutes() / 60 + ((true) ? 0.5 : 0)),
          meetingLength: wiewBox.clientWidth * (dateDiff / 3600000)//(1000 *60 *60) 
        })
      })
    };
  }

}
