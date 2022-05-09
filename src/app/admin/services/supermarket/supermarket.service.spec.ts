import { TestBed } from '@angular/core/testing';

import { SupermarketService } from './supermarket.service';

describe('SupermarketService', () => {
  let service: SupermarketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupermarketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
