import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BazzarService } from './bazzar.service';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';

@Component({
  selector: 'ngx-bazzar',
  templateUrl: './bazzar.component.html',
  styleUrls: ['./bazzar.component.scss']
})
export class BazzarComponent implements OnInit {

  public bazzarlist: Observable<any>

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      bazzar_item: {
        title: 'Bazzar Item',
        type: 'string',
        filter: true
      },
      price: {
        title: 'Price',
        type: 'string',
        valuePrepareFunction: (cell, row) => { return row.price == null ? "" : row.price + " Euro" }
      },
      quantity: {
        title: 'quantity',
        type: 'string',
        valuePrepareFunction: (cell, row) => { return row.quantity == null ? "" : row.quantity +  row.unit }
      },
      // bazzar_date: {
      //   title: 'Bazar Date',
      //   type: 'string',
      // },
      'bazzar_date': {
        title: 'Bazzar Date',
        valuePrepareFunction: (cell, row) => { return this.formetDate(row.bazzar_date) }
      },
      'user.first_name': {
        title: 'Bazzar By',
        valuePrepareFunction: (cell, row) => { return row.user.first_name }
      },
      pager : {
        display : true,
        perPage:2
    }
      
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: BazzarService) { }

  ngOnInit(): void {
    this.GetAll();
  }

  GetAll(){
    this.service.getAllbazzar().subscribe(
      (data) => {   
          this.source.load(data);
      }
    )
  }

  

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  formetDate(date : any){
    date = new Date(date)
    var month = date.getUTCMonth() + 1; //months from 1-12
    var day = date.getUTCDate();
    var year = date.getUTCFullYear();
    return day + "/" + month + "/" + year;
  }


}




