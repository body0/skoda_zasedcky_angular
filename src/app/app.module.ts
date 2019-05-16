import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { QrScannerComponent } from './qr-scanner/qr-scanner.component';
import { StillButtonComponent } from './still-button/still-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QrScannerComponent,
    StillButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
