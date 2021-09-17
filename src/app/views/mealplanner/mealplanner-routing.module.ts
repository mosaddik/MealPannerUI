import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BazzarComponent } from './bazzar/bazzar.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ManageBazzar',
    pathMatch: 'full',
  },
  {
    path: 'ManageBazzar',
    component:BazzarComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MealplannerRoutingModule { }
