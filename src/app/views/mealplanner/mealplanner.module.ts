import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MealplannerRoutingModule } from './mealplanner-routing.module';
import { BazzarComponent } from './bazzar/bazzar.component';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from "angular-datatables";
import { NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDate,NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    BazzarComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    MealplannerRoutingModule,
    HttpClientModule,
    DataTablesModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ]
})
export class MealplannerModule { }
