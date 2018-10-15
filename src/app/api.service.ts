import { Injectable } from  '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Injectable({
providedIn:  'root'
})

export  class  APIService {
  API_URL = 'http://localhost:8000';

  constructor(private  httpClient: HttpClient) {
  }

  getData() {
    return this.httpClient.get(`${this.API_URL}/dbapi`);
  }

  getMachine(machineid){
    console.log(machineid);
    return this.httpClient.post(`${this.API_URL}/machine`,{'machineid':machineid});
  }
}
