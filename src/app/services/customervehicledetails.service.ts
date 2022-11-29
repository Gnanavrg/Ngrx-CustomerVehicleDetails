import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CustomerDetailsModel } from '../models/customer-details.model';
import { deleteItem } from '../vehicle-details/store/actions/vehicledetails.actions';

@Injectable({
  providedIn: 'root'
})
export class CustomervehicledetailsService {

  constructor(private http:HttpClient) { }

  getItem(){
    return this.http.get<CustomerDetailsModel[]>(`http://localhost:3000/customerDetails`);
  }

  getById(id:number){
    return this.http.get<CustomerDetailsModel[]>(`http://localhost:3000/customerDetails/${id}`);
  }

  addItem(addObj:CustomerDetailsModel){
    return this.http.post<CustomerDetailsModel[]>(`http://localhost:3000/customerDetails`, addObj);
  }

  updateItem(updateObj:CustomerDetailsModel){
    let id = updateObj.id;
    return this.http.put<CustomerDetailsModel[]>(`http://localhost:3000/customerDetails/${id}`, updateObj);
  }

  deleteItem(id:number){
    return this.http.delete<CustomerDetailsModel[]>(`http://localhost:3000/customerDetails/${id}`);
  }
}
