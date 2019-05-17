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
    UtilityContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
