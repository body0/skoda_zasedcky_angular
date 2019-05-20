import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-meeting-dialog',
  templateUrl: './meeting-dialog.component.html',
  styleUrls: ['./meeting-dialog.component.css']
})
export class MeetingDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<MeetingDialogComponent>
    ){}

  ngOnInit() {
    
  }
  
  exitClick(){
    this.dialogRef.close();
  }

}
