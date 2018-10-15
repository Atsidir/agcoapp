import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {Subject} from "rxjs/Rx";
import {DataTableDirective} from "angular-datatables";


@Component({
  selector: 'app-tracker-table',
  templateUrl: './tracker-table.component.html',
  styleUrls: ['./tracker-table.component.css']
})


export class TrackerTableComponent implements OnInit {
  _data: Array<object>;

  @Input()
  set data(data: Array<object>) {
    this._data = data;

      this.dtTrigger.next();

  }

  @Output() messageEvent = new EventEmitter<any>();

  sendFilter(machineid) {
    this.messageEvent.emit(machineid)
  }



  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor() {
  }

  ngOnInit() {

    this.dtOptions = {
      autoWidth: false,
      paging: false,
      scrollY: "400px",

    }

  }


  redirectto(item){

    console.log(item.equipment);
    this.sendFilter(item.equipment)
  }


}
