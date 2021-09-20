import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BazzarComponent } from './bazzar/bazzar.component';
import { UserComponent } from './user/user.component';

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
  {
    path: 'Users',
    component:UserComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MealplannerRoutingModule { }
