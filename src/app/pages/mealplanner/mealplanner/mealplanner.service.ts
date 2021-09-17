import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MealplannerService {

  constructor(private http : HttpClient) {    
  }

  saveBarraz(bazzar:any):any{

    var url = "http://localhost:8080/api/v1/bazzar/save?bazzar_item="+bazzar.bazzar_item
    + "&price=" + bazzar.price
    + "&quantity=" + bazzar.quantity
    + "&unit=" + bazzar.unit
    + "&bazzar_by=" + bazzar.bazzar_by
    + "&bazzar_date=" + bazzar.bazzar_date

    this.http.post(url,{}).subscribe(
      (data) => {
        alert("Bazzar Added Successfully!");
      },
      error => {
        alert(JSON.stringify(error.error));
      }
    )
  }

  getAllBazzar():any{

    var url = "http://localhost:8080/api/v1/users"

    this.http.get(url).subscribe(
      (data) => {
        console.log(data);
      }
    )

  }

   
}
