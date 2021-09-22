import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { CustomValidatorService } from '../../../service/custom-validator.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


  // 1. Add New User 
  // 2. Edit New User 
  // 3. Delete New User 
  // 4. Validate Form Input 
  // 5. Estimated Time 

  userlist : Observable <any>
  
  closeResult = '';
  model: NgbDateStruct;

  submitted = false;

  userForm = this.fb.group({
    first_name: new FormControl('',Validators.required),
    last_name: new FormControl('',Validators.required),
    email : new FormControl('',[Validators.required, Validators.email]),
    password : new FormControl('',Validators.compose([Validators.required,this.customValidator.patternValidator()])),
    confirmpassword : new FormControl('',Validators.required),
  },
  {
    validators : this.customValidator.MatchPassword('password','confirmpassword') 
  });
  

  constructor(private userservice :  UserService,private modalService: NgbModal,private customValidator : CustomValidatorService,private fb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.userservice.getallusers()
  }


  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  get userFormControl() {
    return this.userForm.controls;
  }

  onSubmit(){
    if(this.userForm.status == "VALID"){
      alert("Form Submmited Successfully!")
    }
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }



}
