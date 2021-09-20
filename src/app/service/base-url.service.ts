import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseUrlService {



  constructor() { }


  getbaseurl(){
    let baseUrl = "http://localhost:8081/api/v1/"
    return baseUrl;
  }


}
