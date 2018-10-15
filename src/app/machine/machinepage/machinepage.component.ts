import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../dataservice.service";

@Component({
  selector: 'app-machinepage',
  templateUrl: './machinepage.component.html',
  styleUrls: ['./machinepage.component.css']
})
export class MachinepageComponent implements OnInit {
  public data:Array<any>=[];
  public _machineid:any;

  @Input()
  set machineid(data:any){
    console.log('input');
      this._machineid=data;
  }
  constructor(private dataService:DataService) { }

  ngOnInit() {

    this.dataService.getMachine(this._machineid).subscribe((data: Array<object>) => {
      this.data=data;
      console.log('machine page machine id');
    });
  }

}
