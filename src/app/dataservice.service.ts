import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {APIService} from "./api.service";

@Injectable({
providedIn:  'root'
})


export class DataService {

  public currentData:Array<object>=[];
  //private messageSource = new BehaviorSubject('default message');
  // currentData = this.messageSource.asObservable();

  constructor(private api:APIService) {
  }

  getData() {
    return this.api.getData()
  }

  getMachine(machineid) {
    return this.api.getMachine(machineid)
  }

}
