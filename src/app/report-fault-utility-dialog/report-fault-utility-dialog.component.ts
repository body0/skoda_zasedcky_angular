import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-report-fault-utility-dialog',
  templateUrl: './report-fault-utility-dialog.component.html',
  styleUrls: ['./report-fault-utility-dialog.component.css']
})
export class ReportFaultUtilityDialogComponent {

  constructor(
    private apiServise: ApiService,
    public dialogRef: MatDialogRef<ReportFaultUtilityDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataReportDefect) { }

  exitClick(){  
    this.data.utility = "tv";//FOR TESTING / IN PROGRES
    this.dialogRef.close();
  }

}

export interface DialogDataReportDefect{
  room_name: string,
  fault_name: string,
  fault_description: string,
  utility:string,
  date_fault:string //YYYY-MM-DD
}