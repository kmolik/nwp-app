import { TestBed } from '@angular/core/testing';

import { Unit_indexService } from './unit_index.service';

describe('Unit_indexService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Unit_indexService = TestBed.get(Unit_indexService);
    expect(service).toBeTruthy();
  });
});
