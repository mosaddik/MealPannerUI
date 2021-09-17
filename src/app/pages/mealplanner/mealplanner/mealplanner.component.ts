import { Component, OnInit } from '@angular/core';
import { NbDateService } from '@nebular/theme';
import { FormControl, FormGroup } from '@angular/forms';
import { MealplannerService } from './mealplanner.service';

@Component({
  selector: 'ngx-mealplanner',
  templateUrl: './mealplanner.component.html',
  styleUrls: ['./mealplanner.component.scss']
})
export class MealplannerComponent implements OnInit {

  min: Date;
  max: Date;

  bararForm = new FormGroup({
    Item: new FormControl(''),
    Price: new FormControl(''),
    PurchaseDate : new FormControl(''),
    Unit : new FormControl(''),
    Quantity : new FormControl(''),
    BazzarBy : new FormControl('')
  });

  constructor(protected dateService: NbDateService<Date>
    ,private mealplannerService : MealplannerService
    ) { 
    this.min = this.dateService.addDay(this.dateService.today(), -5);
    this.max = this.dateService.addDay(this.dateService.today(), 5);
  }

  ngOnInit(): void {
    
  }

  EntryBazar() : void{


    var month = this.bararForm.value.PurchaseDate.getUTCMonth() + 1; //months from 1-12
    var day = this.bararForm.value.PurchaseDate.getUTCDate();
    var year = this.bararForm.value.PurchaseDate.getUTCFullYear();

    var dateString = day + "/" + month + "/" + year;

    var bazzar = {
      bazzar_date : dateString,
      bazzar_item : this.bararForm.value.Item,
      price : parseFloat(this.bararForm.value.Price),
      unit : this.bararForm.value.Unit,
      quantity : parseFloat(this.bararForm.value.Quantity),
      bazzar_by : parseInt(this.bararForm.value.BazzarBy)
    }

    this.mealplannerService.saveBarraz(bazzar);
    
    //console.log(this.bararForm.value);
    //this.mealplannerService.saveBarraz(this.bararForm.value);
    //this.mealplannerService.getAllBazzar();
  }

  GetAllBazzar(): void{
  }

}
