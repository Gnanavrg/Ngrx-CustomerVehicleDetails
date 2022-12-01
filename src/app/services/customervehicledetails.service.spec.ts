import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { CustomervehicledetailsService } from './customervehicledetails.service';

let testUrl = '/data';
interface Data {
  name: string;
}

describe('CustomervehicledetailsService', () => {
  let service: CustomervehicledetailsService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  let DATA = [
    {
      id: 1,
      name: 'Cust 1',
      vehicalList:[{
        id:1,
        vehicalModel:'',
        vehicleNumber:''
      }],
    },
    {
      id: 2,
      name: 'Cust 1',
      vehicalList:[{
        id:1,
        vehicalModel:'',
        vehicleNumber:''
      }],
    },
    {
      id: 3,
      name: 'Cust 1',
      vehicalList:[{
        id:1,
        vehicalModel:'',
        vehicleNumber:''
      }],
    },
  ];
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CustomervehicledetailsService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call the testurl with get Request', () => {
    const testData: Data = { name: 'test' };
    httpClient.get<Data>(testUrl).subscribe((data) => {
      expect(data).toEqual(testData);
    });
    const request = httpTestingController.expectOne('/data');
    request.flush(testData);
    expect(request.request.method).toBe('GET');
  });
  it('should test multiple requests', () => {
    const testData: Data[] = [{ name: 'test' }, { name: 'test' }];

    httpClient.get<Data[]>(testUrl).subscribe((data) => {
      expect(data.length).toEqual(0);
    });

    httpClient.get<Data[]>(testUrl).subscribe((data) => {
      expect(data).toEqual([testData[0]]);
    });

    httpClient.get<Data[]>(testUrl).subscribe((data) => {
      expect(data).toEqual(testData);
    });

    const requests = httpTestingController.match(testUrl);
    expect(requests.length).toEqual(3);

    requests[0].flush([]);
    requests[1].flush([testData[0]]);
    requests[2].flush(testData);
  });

  describe('getItem()', () => {
    it('should return data when getItem() is called', (done: DoneFn) => {
      service.getItem().subscribe((data) => {
        expect(data).toEqual(DATA);
        done();
      });

      const request = httpTestingController.expectOne(
        'http://localhost:3000/customerDetails'
      );
      request.flush(DATA);
      expect(request.request.method).toBe('GET');
    });
  });

  describe('getByID()', () => {
    it('should return single data when getByID is called with Id', () => {
      service.getById(1).subscribe();

      const request = httpTestingController.expectOne(
        `http://localhost:3000/customerDetails/1`
      );

      expect(request.request.method).toBe('GET');
    });
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
