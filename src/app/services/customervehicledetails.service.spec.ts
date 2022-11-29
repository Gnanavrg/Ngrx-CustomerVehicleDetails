import { TestBed } from '@angular/core/testing';

import { CustomervehicledetailsService } from './customervehicledetails.service';

describe('CustomervehicledetailsService', () => {
  let service: CustomervehicledetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomervehicledetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
