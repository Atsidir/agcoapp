import { Component, OnInit } from '@angular/core';
import {DataService} from "../dataservice.service";


@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {
  public data:Array<object>=this.dataService.currentData;
  constructor(private dataService:DataService) { }
  public filtered:Array<object>=[];
  machineid:any;

  firstPage:boolean=true;

  ngOnInit() {
    this.dataService.getData().subscribe((data: Array<object>) => {
      this.data=data;
      this.filtered=data;
    });
  }

   receiveFilter($event) {
    this.filtered = $event
  }
    receivePage($event) {
    this.machineid=$event;
    this.firstPage = false;
  }

}
