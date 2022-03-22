import { TestBed } from '@angular/core/testing';

import { PharmacyServiceService } from './pharmacy-service.service';

describe('PharmacyServiceService', () => {
  let service: PharmacyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PharmacyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
