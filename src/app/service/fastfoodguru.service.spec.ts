import { TestBed } from '@angular/core/testing';

import { FastfoodguruService } from './fastfoodguru.service';

describe('FastfoodguruService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FastfoodguruService = TestBed.get(FastfoodguruService);
    expect(service).toBeTruthy();
  });
});
