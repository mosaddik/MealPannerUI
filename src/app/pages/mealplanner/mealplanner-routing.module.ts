
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BazzarComponent } from './bazzar/bazzar.component';
import { MealplannerComponent } from './mealplanner/mealplanner.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {
    path: '',
    component: MealplannerComponent,
    children: [
      {
        path: '/profile',
        component: ProfileComponent,
      },
    ],
  },

  {
    path: 'bazzar',
    component: BazzarComponent,
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MealplannerRoutingModule {
}
