import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { QrScannerComponent } from './qr-scanner/qr-scanner.component';
import { StillButtonComponent } from './still-button/still-button.component';
import { ListLastComponent } from './list-last/list-last.component';
import { RoomInfoComponent } from './room-info/room-info.component';
import { LoginMenuComponent } from './login-menu/login-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QrScannerComponent,
    StillButtonComponent,
    ListLastComponent,
    RoomInfoComponent,
    LoginMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
