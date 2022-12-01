import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { CustomerDetailsModel } from "src/app/models/customer-details.model";

export interface VehicleDetailsState extends EntityState<CustomerDetailsModel>{}

export const vehicleDetailsAdapter = createEntityAdapter<CustomerDetailsModel>();

export const initialState: VehicleDetailsState = vehicleDetailsAdapter.getInitialState();

