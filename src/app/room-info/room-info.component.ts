import { Component, OnInit, Input } from '@angular/core';
import { ApiService, SheduleData, Meeting } from '../api.service';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReportFaultUtilityDialogComponent } from '../report-fault-utility-dialog/report-fault-utility-dialog.component';
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
  SearchError: number = 0; //show only backgroud util data arrive
  RoomInfo = {
    id: 0,
    chair: 0,
    contact: ""
  };
  FaultList = [];
  NextInText = "Next Day";
  NextInColor = "#4AA82E";
  UtilityImageURLList = [];
  RoomSchedule; //raw data to shcdeule component
  DislayedRoomName; // room id
  //this: any;

  constructor(
    private apiServise: ApiService,
    private loginSerivse: LoginService,
    private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  @Input("RoomID")
  set RoomID(RoomID) {
    this.RegreshInfo(RoomID);
  }

  RegreshInfo(RoomID) {
    
    this.DislayedRoomName = RoomID;
    
    this.apiServise.getRoomInfo(RoomID)
      .then((res: any) => {

        if (!res.id_found) {//wrong room ID
          this.SearchError = 2;
          return;
        }
        else
          this.SearchError = 1;

        //reset data - Not necessary
        this.UtilityImageURLList = [];
        this.FaultList = [];
        this.RoomInfo = {
          id: 0,
          chair: 0,
          contact: ""
        };

        var defect = [] //for red collor of utility icons 
        if ("reportedDefects" in res) {
          defect = res.reportedDefects.map((val) => val.defectUtilyty);
          this.FaultList = res.reportedDefects;
        }
        if ("utility" in res) { //not working properly, need to be finished and tested
          this.UtilityImageURLList = res.utility.map((val) => {
            if (val in defect)
              return 'assets/img/utility/' + val + '-defect.png';
            else
              return 'assets/img/utility/' + val + '.png';
          })
        }
        this.RoomInfo = res;
      })
      .catch( (err) => {
        this.SearchError = 3;
      })

    this.apiServise.getRoomSchedule(RoomID)
      .then((res: SheduleData) => {

        if (!res.id_found) {
          this.NextInText = "Next Day";
          this.NextInColor = "#4AA82E";
          return;
        }
        
        this.RoomSchedule = res;

        var curentTime = (new Date()).getTime();
        var lovestTime = Infinity;
        //linear search, idealy change it to some sort of binary search
        for (let val of res.schedule_list) {
          //start of meeting in UTC
          let testTime = new Date(val.start).getTime() +(new Date(val.start).getTimezoneOffset() *1000 *60);
          let end = new Date(val.end).getTime() +(new Date(val.start).getTimezoneOffset() *1000 *60);

          //happening right now
          if (curentTime > testTime && curentTime < end) {
            this.NextInText = "NOW";
            this.NextInColor = "#F44336";
            break;
          }

          //happening in the future and is earlier than "lovestTime"
          if (lovestTime > testTime && testTime > curentTime) {
            //time in utc to start of meeting
            var utc = (testTime - curentTime);
            lovestTime = testTime;

            // test if time to next meeting si lower than one hour
            if (Math.floor(utc / (1000 * 60 * 60)) == 0){
              this.NextInText = String(Math.floor(utc / (1000 * 60) % 60)) + "min";
              this.NextInColor = "gold";
            }            
            else{
              this.NextInText = String(Math.floor(utc / (1000 * 60 * 60))) + "hr  " + String(Math.floor(utc / (1000 * 60) % 60)) + "min";
              this.NextInColor = "#4AA82E";
            }

            /* if (testTime - curentTime < (1000 * 60 * 60))
              this.NextInColor = "gold";
            //break; */
          }
        }
      })
  }

  moreInfo() {
    this.moreInfoMode = !this.moreInfoMode;
  }
  moreFaults() {
    this.moreFaultsMode = !this.moreFaultsMode;
  }
  showSchedule() {
    this.showShedule = !this.showShedule;
  }

  //NOT WORKING - code in progres
  reportFaultUtility() {
    const dialogRef = this.dialog.open(ReportFaultUtilityDialogComponent, {
      width: '85vw',
      data: { Name: "", Description: "" }
    }).afterClosed().subscribe((data) => {
      if (data != null) {
        data.email = this.loginSerivse.getLogedUserInfo().email;
        //data.room_name = this.DislayedRoomName;
        this.apiServise.newDefectReport(this.RoomID, data);
      }

    });
  }
  //NOT WORKING - code in progres
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
