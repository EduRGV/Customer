import { Component } from '@angular/core';
import { CustomerService } from 'src/app/service/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-details-customer',
  templateUrl: './details-customer.component.html',
  styleUrls: ['./details-customer.component.css']
})
export class DetailsCustomerComponent {
  customer: Customer = null!;

  constructor(
    private customerService: CustomerService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    const customerId = this.activatedRoute.snapshot.params['customerId'];
    this.customerService.detail(customerId).subscribe(
      data => {
        this.customer = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.back();
      }
    );
  }

  back(): void {
    this.router.navigate(['/']);
  }
}
