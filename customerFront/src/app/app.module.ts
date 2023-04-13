import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { ListCustomerComponent } from './customer/list-customer/list-customer.component';
import { DetailsCustomerComponent } from './customer/details-customer/details-customer.component';
import { NewCustomerComponent } from './customer/new-customer/new-customer.component';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";

// importaciones
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';




@NgModule({
  declarations: [
    AppComponent,
    ListCustomerComponent,
    DetailsCustomerComponent,
    NewCustomerComponent,
    EditCustomerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
