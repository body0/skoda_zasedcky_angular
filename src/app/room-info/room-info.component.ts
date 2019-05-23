import { Component, OnInit, Input } from '@angular/core';
import { ApiService, SheduleData, Meeting } from '../api.service';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReportFaultUtilityDialogComponent } from '../report-fault-utility-dialog/report-fault-utility-dialog.component';
import { ScheduleDialogComponent } from '../schedule-dialog/schedule-dialog.component';
import { LoginService } from '../login.service';
import { MeetingDialogComponent } from '../meeting-dialog/meeting-dialog.component';

@Component({
  selector: 'app-room-info',
  templateUrl: './room-info.component.html',
  styleUrls: ['./room-info.component.css']
})
export class RoomInfoComponent implements OnInit {

  moreInfoMode: boolean = false;
  moreFaultsMode: boolean = false;
  showShedule: boolean = false;
  SearchError: number = 0;
  RoomInfo = {
    id: 0,
    chair: 0,
    contact: ""
  };
  FaultList = [];
  NextInText = "Next Day";
  NextInColor = "black";
  UtilityImageURLList = [];
  RoomSchedule;
  DislayedRoomName;
  this: any;

  constructor(
    private apiServise: ApiService,
    private loginSerivse: LoginService,
    private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  @Input("RoomID")
  set RoomID(RoomID) {
    this.DislayedRoomName = RoomID;
    this.apiServise.getRoomInfo(RoomID)
      .then((res: any) => {
        console.log("Z", res)
       
        if(!res.id_found) {
          //console.log("Z", res.id_found)
          this.SearchError = 2;
          return;
        }
        else 
           this.SearchError = 1;

        var defect = []
        if ("reportedDefects" in res) {
          defect = res.reportedDefects.map((val) => val.defectUtilyty);
          this.FaultList = res.reportedDefects;
        }
        if ("utility" in res) {
          console.log("in", res.utility)
          this.UtilityImageURLList = res.utility.map((val) => {
            if (val in defect)
              return 'assets/img/utility/' + val + '-defect.png';
            else
              return 'assets/img/utility/' + val + '.png';
          })
        }
        this.RoomInfo = res;
      })
    //var sub = this; 
    this.apiServise.getRoomSchedule(RoomID)
      .then((res:SheduleData) => {
           // console.log("before in", res)
           if(!res.id_found)
            return;
          //this.RoomSchedule = res;
          //linear search, idealy change it to some sort of binary search
          var curentTime = (new Date()).getTime(); 
          var lovestTime = Infinity;
          for(let val of res.schedule_list){
            let testTime = new Date(val.start).getTime();
            //console.log(new Date(val.start).getTime(), curentTime);
            //console.log("in",curentTime - testTime, testTime -(new Date(val.end).getTime()))
            if(curentTime > testTime && curentTime < new Date(val.end).getTime()){
              console.log
              this.NextInText = "NOW";(1000*60*60)
              this.NextInColor = "#F44336";
              break;
            }
            if(lovestTime > testTime && testTime > curentTime){
              var utc = (testTime -curentTime);
              lovestTime = testTime;
              //console.log("in",  (new Date(val.start).getTime() -curentTime) /(1000*60)) 
              if(Math.floor(utc /(1000 *60 *60)) == 0)
                this.NextInText = String( Math.floor(utc /(1000 *60) %60)) +"min";
              else
                this.NextInText = String( Math.floor(utc /(1000 *60 *60) )) + "hr  " + String( Math.floor(utc /(1000 *60) %60)) +"min";
              //console.log("in",testTime -curentTime -(1000*60*60))
              if(testTime -curentTime < (1000*60*60) )
                this.NextInColor = "gold";
              //break;
            }

            //test if someone 
          }
      })
  }
  /* @Input("RoomSchedule")
  set RoomSchedule(RoomSchedule) {

  } */

  moreInfo() {
    this.moreInfoMode = !this.moreInfoMode;
  }
  moreFaults() {
    this.moreFaultsMode = !this.moreFaultsMode;
  }
  /* showSchedule() {
    const dialogRef = this.dialog.open(ScheduleDialogComponent, {
      width: '85vw'
    });
  } */
  showSchedule() {
    this.showShedule = !this.showShedule;
  }
  reportFaultUtility() {
    const dialogRef = this.dialog.open(ReportFaultUtilityDialogComponent, {
      width: '85vw',
      data: { Name: "", Description: ""}
    }).afterClosed().subscribe((data) => {
      if (data != null) {
        data.email = this.loginSerivse.getLogedUserInfo().email;
        this.apiServise.newDefectReport(this.RoomID, data);
      }

    });
  }
  showAddMeetingDialog() {
    const dialogRef = this.dialog.open(MeetingDialogComponent, {
      width: '85vw'
    }).afterClosed().subscribe((data) => {
      if (data != null) {
        var userInfo = this.loginSerivse.getLogedUserInfo().email;
      }

    });
  }

}
