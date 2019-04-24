import { TestBed } from '@angular/core/testing';

import { Rss2jsonService } from './rss2json.service';

describe('Rss2jsonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Rss2jsonService = TestBed.get(Rss2jsonService);
    expect(service).toBeTruthy();
  });
});
