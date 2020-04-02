import { TestBed } from '@angular/core/testing';

import { FoodyService } from './foody.service';

describe('FoodyService', () => {
  let service: FoodyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
