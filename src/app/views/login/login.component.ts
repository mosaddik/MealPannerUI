import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {Router} from "@angular/router"


@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {


  public loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private router: Router){

  }


  onSubmit(){
    this.router.navigate(['/MealPlanner/ManageBazzar'])
    console.log(this.loginForm.value)
  }


 }
