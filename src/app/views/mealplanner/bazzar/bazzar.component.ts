import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalDismissReasons, NgbDateStruct, NgbModal ,NgbDatepicker} from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';
import { MealplannerService } from './mealplanner.service';

@Component({
  selector: 'app-bazzar',
  templateUrl: './bazzar.component.html',
  styleUrls: ['./bazzar.component.scss']
})
export class BazzarComponent implements OnInit {

  constructor(private mealplannerService : MealplannerService,private userService : UserService,private modalService: NgbModal) { }

  public bazzarlist : Observable<any>;
  public userlist : Observable<any>;


  closeResult = '';
  model: NgbDateStruct;


  bararForm = new FormGroup({
    Item: new FormControl(''),
    Price: new FormControl(''),
    PurchaseDate : new FormControl(''),
    Unit : new FormControl(''),
    Quantity : new FormControl(''),
    BazzarBy : new FormControl('')
  });

  ngOnInit(): void {
    this.getall();
    this.getallusers();
  }


  getall(){
    this.bazzarlist = this.mealplannerService.getall();
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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

  EntryBazar() : void{

    console.log(this.bararForm.value);


    var dates = 
    this.bararForm.value.PurchaseDate.day + "/" 
    +this.bararForm.value.PurchaseDate.month + "/"
    +this.bararForm.value.PurchaseDate.year 

    var bazzar = {
      bazzar_date : dates,
      bazzar_item : this.bararForm.value.Item,
      price : parseFloat(this.bararForm.value.Price),
      unit : this.bararForm.value.Unit,
      quantity : parseFloat(this.bararForm.value.Quantity),
      bazzar_by : parseInt(this.bararForm.value.BazzarBy)
    }
    console.log(bazzar)
  }

  getallusers(): void{
    this.userlist  = this.userService.getallusers()
  }




}
