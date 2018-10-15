import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-trackercategory',
  templateUrl: './trackercategory.component.html',
  styleUrls: ['./trackercategory.component.css']
})
export class TrackercategoryComponent implements OnInit {
  _data: Array<object>;
  cat1:String;
  cat2:String;
  categoryDi:any;

  @Input()
  set data(data:Array<object>){
    console.log(data);
    this.categorizeData(data);
  }
  constructor() { }

  ngOnInit() {
  }

  public categorizeData(data){
    let dict={};
    for (let line in data){
      if (data[line]['category1']!=null){
        if(dict[data[line]['category1']]!=null){
          dict[data[line]['category1']]=dict[data[line]['category1']]+1
        } else {
          dict[data[line]['category1']]=1
        }

      }

    }
    this.categoryDi=dict;
    console.log(dict);
  }

}
