/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TentorService } from './tentor.service';

describe('Service: Tentor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TentorService]
    });
  });

  it('should ...', inject([TentorService], (service: TentorService) => {
    expect(service).toBeTruthy();
  }));
});
