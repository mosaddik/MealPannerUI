import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseUrlService } from '../../../service/base-url.service';
import {userViewDataModel } from '../model/users'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient , private baseUrl : BaseUrlService ) { }

  getallusers(): Observable<any>{
    const url = this.baseUrl.getbaseurl() + "users"
    return this.http.get(url);
  }

  add(user : userViewDataModel){
    const url = this.baseUrl.getbaseurl() + "users"
    return this.http.post(url,user);
  }

  update(user : userViewDataModel){
    const url = this.baseUrl.getbaseurl() + "users"
    return this.http.post(url,user);
  }

  delete(userId : number){
    const url = this.baseUrl.getbaseurl() + "users"
    return this.http.delete(url);
  }


}
