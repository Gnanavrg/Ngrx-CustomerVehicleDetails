import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CustomerDetailsModel } from 'src/app/models/customer-details.model';
import { VehicleDetailsState } from '../store/state/vehicledetails.state';
import { addItem } from '../store/actions/vehicledetails.actions';
import { Router } from '@angular/router';
import { VehicleListModel } from 'src/app/models/vehiclelist.model';

@Component({
  selector: 'app-add-vehicle-details',
  templateUrl: './add-vehicle-details.component.html',
  styleUrls: ['./add-vehicle-details.component.scss']
})
export class AddVehicleDetailsComponent implements OnInit {

  addFormData!:FormGroup;
  vehicleData!: CustomerDetailsModel;
  title = "Add Customer Vehicle details";

  constructor(private store:Store<VehicleDetailsState>, private router:Router, private fb:FormBuilder) { }

  ngOnInit(): void {
    
    this.createAddForm();
  }

  createAddForm(){
    this.addFormData = new FormGroup({
      name: new FormControl("",[Validators.required, Validators.minLength(6)]),
      vehicleList: this.fb.array([this.fb.group({
        vehicleModel: new FormControl("",[Validators.required, Validators.minLength(3)]),
        vehicleNumber: new FormControl("",[Validators.required, Validators.pattern('^[A-Z]{3}[0-9]{3}$'), Validators.minLength(6)])
      })])
    });
  }

  vehicleList() {
      return this.addFormData.get('vehicleList') as FormArray;
  }

  newList(){
    return this.fb.group({
      vehicleModel: new FormControl("",[Validators.required, Validators.minLength(3)]),
      vehicleNumber: new FormControl("",[Validators.required, Validators.pattern('^[A-Z]{3}[0-9]{3}$'), Validators.minLength(6)])
    })
  }

  addVehicleList() {  
    this.vehicleList().push(this.newList());  
  }  

  removeVehicleList(i:number) {  
    this.vehicleList().removeAt(i);  
  }  

  nameValidator() {
    const nameForm:any = this.addFormData.get('name');
    if (nameForm.touched && !nameForm.valid) {
      if (nameForm.errors.required) {
        return 'Owner is required';
      }else if (nameForm.errors.minlength) {
        return 'Name should be of minimum 6 characters length';
      }else{
        return '';
      }
    }else{
      return '';
    }
  }

  vehicleModelValidator(id:number) {
    const formArrayCtrl = this.addFormData.get('vehicleList') as FormArray;
    const vehicleModelForm:any = formArrayCtrl.at(id).get('vehicleModel');
    if (vehicleModelForm?.touched && !vehicleModelForm?.valid) {
      if (vehicleModelForm?.errors?.required) {
        return 'Vehicle Model is required';
      }else if (vehicleModelForm?.errors?.minlength) {
        return 'Vehicle Model should be of minimum 3 characters length';
      }else{
        return '';
      }
    }else{
      return '';
    }
  }

  vehicleNumberValidator(id:number) {
    const formArrayCtrl = this.addFormData.get('vehicleList') as FormArray;
    const vehicleNumberForm:any = formArrayCtrl.at(id).get('vehicleNumber');
    if (vehicleNumberForm?.touched && !vehicleNumberForm?.valid) {
      if (vehicleNumberForm?.errors?.required) {
        return 'Vehicle Number is required';
      }else if (vehicleNumberForm?.errors?.pattern) {
        return 'Vehicle Number should be of AAA000';
      }else if (vehicleNumberForm?.errors?.minlength) {
        return 'Vehicle Number should be of minimum 6 characters length';
      }else{
        return '';
      }
    }else{
      return '';
    }
  }

  onAddItem() {
    if (!this.addFormData.valid) {
      return;
    }
    const dataList = this.addFormData.value.vehicleList;
    const uniqueValues = new Set(dataList.map((data:VehicleListModel) => data.vehicleNumber));

    if (uniqueValues.size < dataList.length) {
      confirm('Duplicate Vehicle Number Found!')
      return;
    }else{
      const newItem:CustomerDetailsModel = {
        name: this.addFormData.value.name,
        vehicleList: this.addFormData.value.vehicleList
      };
      this.store.dispatch(addItem({ newItem }));
      this.router.navigateByUrl('/vehicleDetails');
    }
    
  }

}
