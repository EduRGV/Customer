import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/service/customer.service';
import { ToastrService } from 'ngx-toastr';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  customers: Customer[] = [];

  constructor(
    private customerService: CustomerService,
    private toastr: ToastrService
    ){ }

  ngOnInit(){
    this.loadCustomers();
  }

  loadCustomers(): void{
    this.customerService.list().subscribe(
      data => {
        this.customers = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  delete(customerId?: number){
    this.customerService.delete(customerId!).subscribe(
      data => {
        this.toastr.success('Cliente Eliminado con éxito', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.loadCustomers();
      },
      err => {
        this.toastr.error(err.error.meensaje , 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
      }
    );
  }
  
}
