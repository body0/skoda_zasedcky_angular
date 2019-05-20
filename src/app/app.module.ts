import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { QrScannerComponent } from './qr-scanner/qr-scanner.component';
import { StillButtonComponent } from './still-button/still-button.component';
import { ListLastComponent } from './list-last/list-last.component';
import { RoomInfoComponent } from './room-info/room-info.component';
import { LoginMenuComponent } from './login-menu/login-menu.component';
import { UtylityListComponent } from './utylity-list/utylity-list.component';
import { UtilityContainerComponent } from './utility-container/utility-container.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReportFaultUtilityDialogComponent } from './report-fault-utility-dialog/report-fault-utility-dialog.component';
import { ScheduleDialogComponent } from './schedule-dialog/schedule-dialog.component';
import { MaterialModule } from './material/material.module';
import { MeetingDialogComponent } from './meeting-dialog/meeting-dialog.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MeetingInfoDialogComponent } from './meeting-info-dialog/meeting-info-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QrScannerComponent,
    StillButtonComponent,
    ListLastComponent,
    RoomInfoComponent,
    LoginMenuComponent,
    UtylityListComponent,
    UtilityContainerComponent,
    ScheduleComponent,
    ReportFaultUtilityDialogComponent,
    ScheduleDialogComponent,
    MeetingDialogComponent,
    MeetingInfoDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[
    ReportFaultUtilityDialogComponent,
    ScheduleDialogComponent,
    MeetingDialogComponent,
    MeetingInfoDialogComponent
  ]
})
export class AppModule { }
