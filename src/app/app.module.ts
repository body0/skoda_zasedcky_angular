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
import { ScheduleComponent } from './schedule/schedule.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReportFaultUtilityDialogComponent } from './report-fault-utility-dialog/report-fault-utility-dialog.component';
import { MaterialModule } from './material/material.module';
import { MeetingDialogComponent } from './meeting-dialog/meeting-dialog.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MeetingInfoDialogComponent } from './meeting-info-dialog/meeting-info-dialog.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FormsModule } from '@angular/forms';
import { AboutAppComponent } from './about-app/about-app.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QrScannerComponent,
    StillButtonComponent,
    ListLastComponent,
    RoomInfoComponent,
    LoginMenuComponent,
    ScheduleComponent,
    ReportFaultUtilityDialogComponent,
    MeetingDialogComponent,
    MeetingInfoDialogComponent,
    SideNavComponent,
    AboutAppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[
    ReportFaultUtilityDialogComponent,
    MeetingDialogComponent,
    MeetingInfoDialogComponent
  ]
})
export class AppModule { }
