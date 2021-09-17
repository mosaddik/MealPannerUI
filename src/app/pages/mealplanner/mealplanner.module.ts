import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealplannerComponent } from './mealplanner/mealplanner.component';
import { MealplannerRoutingModule } from './mealplanner-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbIconModule, NbInputModule, NbRadioModule, NbSelectModule, NbUserModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BazzarComponent } from './bazzar/bazzar.component';
import { TablesRoutingModule } from '../tables/tables-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';




@NgModule({
  declarations: [
    MealplannerComponent,
    ProfileComponent,
    BazzarComponent
  ],
  imports: [
    CommonModule,
    MealplannerRoutingModule,
    ReactiveFormsModule,
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbCheckboxModule,
    NbDatepickerModule, 
    NbIconModule,
    NbInputModule,
    NbRadioModule,
    NbSelectModule,
    NbUserModule,
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
    NbIconModule,
    HttpClientModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
  ]
})
export class MealplannerModule { }
