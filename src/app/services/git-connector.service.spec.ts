import { TestBed } from '@angular/core/testing';

import { GitConnectorService } from './git-connector.service';

describe('GitConnectorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitConnectorService = TestBed.get(GitConnectorService);
    expect(service).toBeTruthy();
  });
});
