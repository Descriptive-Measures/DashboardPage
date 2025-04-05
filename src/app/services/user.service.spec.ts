import { TestBed } from '@angular/core/testing';

import { DescriptiveMeasuresUserService } from './user.service';

describe('DescriptiveMeasuresUserService', () => {
  let service: DescriptiveMeasuresUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DescriptiveMeasuresUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
