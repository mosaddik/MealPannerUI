import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealplannerService {

  baseUrl = "http://localhost:8080"

  constructor(private http : HttpClient ) {
  }

  getall(): Observable<any>{
    const url = this.baseUrl + "/api/v1/bazzar"
    return this.http.get(url);
  }

  getallusers(): Observable<any>{
    const url = this.baseUrl + "/api/v1/users"
    return this.http.get(url);
    
  }

}
