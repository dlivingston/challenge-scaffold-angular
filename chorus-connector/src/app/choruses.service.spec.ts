import { TestBed } from '@angular/core/testing';

import { ChorusesService } from './choruses.service';

describe('ChorusesService', () => {
  let service: ChorusesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChorusesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
