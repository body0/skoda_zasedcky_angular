import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-report-fault-utility-dialog',
  templateUrl: './report-fault-utility-dialog.component.html',
  styleUrls: ['./report-fault-utility-dialog.component.css']
})
export class ReportFaultUtilityDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ReportFaultUtilityDialogComponent>) { }

  exitClick(){
    this.dialogRef.close();
  }

}
