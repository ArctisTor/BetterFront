import { TestBed } from '@angular/core/testing';

import { VtuberService } from './vtuber.service';

describe('VtuberService', () => {
  let service: VtuberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VtuberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
