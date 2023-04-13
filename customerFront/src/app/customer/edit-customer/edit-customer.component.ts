import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  customer: Customer = null!;

    constructor(
      private customerService: CustomerService,
      private activatedRoute: ActivatedRoute,
      private toastr: ToastrService,
      private router: Router
    ){}

    ngOnInit(){
      const customerId = this.activatedRoute.snapshot.params['customerId'];
      this.customerService.detail(customerId).subscribe(
        data => {
          this.customer = data;
        },
        err => {
          this.toastr.error(err.error.mensaje, 'Fail', {
            timeOut: 3000,  positionClass: 'toast-top-center',
          });
          this.router.navigate(['/']);
        }
      );     
    }

    OnUpdate(): void{
      const customerId = this.activatedRoute.snapshot.params['customerId'];
      this.customerService.update(customerId, this.customer).subscribe(
        data => {
          this.toastr.success('Cliente Actualizado', 'OK', {
            timeOut: 3000, positionClass: 'toast-top-center'
          });
          this.router.navigate(['/']);
        },
        err => {
          this.toastr.error(err.error.mensaje, 'Fail', {
            timeOut: 3000,  positionClass: 'toast-top-center',
          });
          this.router.navigate(['/']);
        }
      );
    }

}
