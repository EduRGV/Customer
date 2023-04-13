import { Component } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/service/customer.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent {

  companyName = '';
  contactName = '';
  contactTitle = '';
  address = '';
  city = '';
  region = '';
  postalCode = '';
  country = '';
  phone = '';
  fax = '';

  constructor(
    private customerService: CustomerService,
    private toastr: ToastrService,
    private router: Router
    ){ }

  ngOnInit(){
  }

  onCreate(): void{
    const customer = new Customer(this.companyName, this.contactName, this.contactTitle, this.address, this.city, this.region, this.postalCode, this.country, this.phone, this.fax);
    this.customerService.save(customer).subscribe(
      data => {
        this.toastr.success('Cliente Creado con éxito', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/']);
      },
      err => {
        this.toastr.error(err.error.meensaje , 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/']);
      }
    )
  }
}
