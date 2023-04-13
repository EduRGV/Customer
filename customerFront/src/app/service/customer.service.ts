import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customerURL = 'http://localhost:8080/customer/';

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.customerURL + 'list');
  }

  public detail(customerId: number): Observable<Customer> {
    return this.httpClient.get<Customer>(this.customerURL + `detail/${customerId}`);
  }

  public detailname(companyName: string): Observable<Customer> {
    return this.httpClient.get<Customer>(this.customerURL + `detailname/${companyName}`);
  }

  public save(customer: Customer): Observable<any> {
    return this.httpClient.post<any>(this.customerURL + 'create', customer);
  }

  public update(customerId: number, customer: Customer): Observable<any> {
    return this.httpClient.put<any>(this.customerURL + `update/${customerId}`, customer);
  }

  public delete(customerId: number): Observable<any> {
    return this.httpClient.delete<any>(this.customerURL + `delete/${customerId}`);
  }

}
