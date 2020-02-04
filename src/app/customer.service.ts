import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getCustomerList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/customers`);
  }

  createCustomer(customer: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/create-customer`, customer);
  }

  updateCustomer(id: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/edit-customer/${id}`, value);
  }

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete-customer/${id}`);
  }

  getCustomer(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/customer/${id}`);
  }
}
