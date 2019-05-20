import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-meeting-info-dialog',
  templateUrl: './meeting-info-dialog.component.html',
  styleUrls: ['./meeting-info-dialog.component.css']
})
export class MeetingInfoDialogComponent implements OnInit {

  Data;
  constructor(
    public dialogRef: MatDialogRef<MeetingInfoDialogComponent>) { }

  ngOnInit() {
  }
  exitClick(){
    this.dialogRef.close();
  }

}
