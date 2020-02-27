import { TestBed } from '@angular/core/testing';

import { TestsongService } from './testsong.service';

describe('TestsongService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestsongService = TestBed.get(TestsongService);
    expect(service).toBeTruthy();
  });
});
