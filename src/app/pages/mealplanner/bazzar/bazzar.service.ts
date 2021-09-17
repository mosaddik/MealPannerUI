import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BazzarService {

  constructor(private http:HttpClient) {}

  getAllbazzar():Observable<any>{
    var url = "http://localhost:8080/api/v1/bazzar"
    return this.http.get(url);
  }

  



}
