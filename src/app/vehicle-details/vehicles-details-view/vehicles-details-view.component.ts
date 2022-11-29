import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CustomerDetailsModel } from 'src/app/models/customer-details.model';
import { deleteItem, loadData } from '../store/actions/vehicledetails.actions';
import { getData } from '../store/selector/vehicledetails.selectors';

@Component({
  selector: 'app-vehicles-details-view',
  templateUrl: './vehicles-details-view.component.html',
  styleUrls: ['./vehicles-details-view.component.scss']
})
export class VehiclesDetailsViewComponent implements OnInit {

  vehicleDetailsList$!:Observable<CustomerDetailsModel[]>;

  constructor(private store:Store<CustomerDetailsModel>) { }

  ngOnInit(): void {
     this.vehicleDetailsList$ = this.store.select(getData);
     this.store.dispatch(loadData());
  }

  onDeleteItem(id:any){
    if(confirm('Are you sure you want to delete?')){
      this.store.dispatch(deleteItem({id}))
    }
  }

}
