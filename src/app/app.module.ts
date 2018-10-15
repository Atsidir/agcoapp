import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from  '@angular/common/http';
import {AppRoutingModule} from "./app-routing.module";

import { AppComponent } from './app.component';
import { TrackermapComponent } from './trackermap/trackermap.component';
import { TrackerTableComponent } from './tracker-table/tracker-table.component';
import { TrackerComponent } from './tracker/tracker.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {DataService} from "./dataservice.service";
import { DataTablesModule } from 'angular-datatables';
import { TrackercategoryComponent } from './trackercategory/trackercategory.component';
import { MachinetableComponent } from './machine/machinetable/machinetable.component';
import { MachinepartstableComponent } from './machine/machinepartstable/machinepartstable.component';
import { MachinecontrolComponent } from './machine/machinecontrol/machinecontrol.component';
import { MachinepageComponent } from './machine/machinepage/machinepage.component';


@NgModule({
  declarations: [
    AppComponent,
    TrackermapComponent,
    TrackerTableComponent,
    TrackerComponent,
    TrackercategoryComponent,
    MachinetableComponent,
    MachinepartstableComponent,
    MachinecontrolComponent,
    MachinepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SmartTableModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
