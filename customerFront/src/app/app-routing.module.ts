import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCustomerComponent } from './customer/list-customer/list-customer.component';
import { DetailsCustomerComponent } from './customer/details-customer/details-customer.component';
import { NewCustomerComponent } from './customer/new-customer/new-customer.component';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';

const routes: Routes = [
    {path: '', component: ListCustomerComponent},
    {path: 'detail/:customerId', component: DetailsCustomerComponent},
    {path: 'new', component: NewCustomerComponent},
    {path: 'edit/:customerId', component: EditCustomerComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }