import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CustomerDetailsModel } from 'src/app/models/customer-details.model';
import { VehicleDetailsState } from '../store/state/vehicledetails.state';
import { updateItem } from '../store/actions/vehicledetails.actions';
import { ActivatedRoute, Router } from '@angular/router';
import { getDataById } from '../store/selector/vehicledetails.selectors';
import { VehicleListModel } from 'src/app/models/vehiclelist.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-update-vehicle-details',
  templateUrl: './update-vehicle-details.component.html',
  styleUrls: ['./update-vehicle-details.component.scss']
})
export class UpdateVehicleDetailsComponent implements OnInit {

  updateFormData!: FormGroup;
  vehicleFormData!: FormGroup;
  vehicleData!: CustomerDetailsModel;
  containSubscription!: Subscription;
  renderForm:boolean = false;

  title = "Update Customer Vehicle details"

  constructor(private store: Store<VehicleDetailsState>, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    
    this.containSubscription = this.store.select(getDataById).subscribe(data => {
      if (data) {
        this.vehicleData = data;
        this.createAddForm();
        this.renderForm = true;
      }
    });

    
  }

  createAddForm() {
    this.updateFormData = new FormGroup({
      name: new FormControl(this.vehicleData.name, [Validators.required, Validators.minLength(6)]),
      vehicleList: this.fb.array(this.buildForm())
    });
  }

  buildForm(): FormGroup[] {
    return this.vehicleData.vehicleList!.map(data => {
      return this.fb.group({
        vehicleModel: new FormControl(data.vehicleModel, [Validators.required, Validators.minLength(3)]),
        vehicleNumber: new FormControl(data.vehicleNumber, [Validators.required, Validators.pattern('^[A-Z]{3}[0-9]{3}$'), Validators.minLength(6)])
      });
    });
  }

  vehicleList() {
    return this.updateFormData.get('vehicleList') as FormArray;
  }

  newList() {
    return this.fb.group({
      vehicleModel: new FormControl("", [Validators.required, Validators.minLength(3)]),
      vehicleNumber: new FormControl("", [Validators.required, Validators.pattern('^[A-Z]{3}[0-9]{3}$'), Validators.minLength(6)])
    })
  }

  addVehicleList() {
    this.vehicleList().push(this.newList());
  }

  removeVehicleList(i: number) {
    this.vehicleList().removeAt(i);
  }

  nameValidator() {
    if (this.updateFormData.get('name')) {
      const nameForm: any = this.updateFormData.get('name');
      if (nameForm.touched && !nameForm.valid) {
        if (nameForm.errors.required) {
          return 'Owner is required';
        } else if (nameForm.errors.minlength) {
          return 'Name should be of minimum 6 characters length';
        } else {
          return '';
        }
      } else {
        return '';
      }
    } else {
      return ''
    }

  }

  vehicleModelValidator(id: number) {
    if (this.updateFormData.get('vehicleList')) {
      const formArrayCtrl = this.updateFormData.get('vehicleList') as FormArray;
      const vehicleModelForm: any = formArrayCtrl.at(id).get('vehicleModel');
      if (vehicleModelForm?.touched && !vehicleModelForm?.valid) {
        if (vehicleModelForm?.errors?.required) {
          return 'Vehicle Model is required';
        } else if (vehicleModelForm?.errors?.minlength) {
          return 'Vehicle Model should be of minimum 3 characters length';
        } else {
          return '';
        }
      } else {
        return '';
      }
    } else {
      return ''
    }
  }

  vehicleNumberValidator(id: number) {
    if (this.updateFormData.get('vehicleList')) {
      const formArrayCtrl = this.updateFormData.get('vehicleList') as FormArray;
      const vehicleNumberForm: any = formArrayCtrl.at(id).get('vehicleNumber');
      if (vehicleNumberForm?.touched && !vehicleNumberForm?.valid) {
        if (vehicleNumberForm?.errors?.required) {
          return 'Vehicle Number is required';
        } else if (vehicleNumberForm?.errors?.pattern) {
          return 'Vehicle Number should be of AAA000';
        } else if (vehicleNumberForm?.errors?.minlength) {
          return 'Vehicle Number should be of minimum 6 characters length';
        } else {
          return '';
        }
      } else {
        return '';
      }
    } else {
      return ''
    }
  }

  onUpdateItem() {
    if (!this.updateFormData.valid) {
      return;
    }

    const dataList = this.updateFormData.value.vehicleList;
    const uniqueValues = new Set(dataList.map((data: VehicleListModel) => data.vehicleNumber));

    if (uniqueValues.size < dataList.length) {
      confirm('Duplicate Vehicle Number Found!')
      return;
    } else {
      const editItem: CustomerDetailsModel = {
        id: this.vehicleData.id,
        name: this.updateFormData.value.name,
        vehicleList: this.updateFormData.value.vehicleList
      };
      this.store.dispatch(updateItem({ editItem }));
      this.router.navigateByUrl('/vehicleDetails');
    }
  }

  ngOnDestroy() {
    if (this.containSubscription) {
      this.containSubscription.unsubscribe();
    }
  }

}
