import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { BaseUrlService } from '../../../service/base-url.service';

@Injectable({
  providedIn: 'root'
})
export class MealplannerService {

  

  constructor(private http : HttpClient,private baseUrl : BaseUrlService ) {
  }

  getall(): Observable<any>{
    const url = this.baseUrl.getbaseurl() + "bazzar"
    return this.http.get(url);
  }

  

}
