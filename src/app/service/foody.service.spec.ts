import { TestBed } from '@angular/core/testing';

import { FoodyService } from './foody.service';

describe('FastfoodguruService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FoodyService = TestBed.get(FoodyService);
    expect(service).toBeTruthy();
  });
});
