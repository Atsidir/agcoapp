import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from  '@angular/common/http';
import {AppRoutingModule} from "./app-routing.module";

import { AppComponent } from './app.component';
import { TrackermapComponent } from './trackermap/trackermap.component';

@NgModule({
  declarations: [
    AppComponent,
    TrackermapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
