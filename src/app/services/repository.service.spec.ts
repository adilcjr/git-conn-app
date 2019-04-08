import { TestBed } from '@angular/core/testing';

import { RepositoryService } from './repository.service';
import { HttpClientModule } from '@angular/common/http';
import { GitConnectorService } from './git-connector.service';

describe('RepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [GitConnectorService]
  }));

  it('should be created', () => {
    const service: RepositoryService = TestBed.get(RepositoryService);
    expect(service).toBeTruthy();
  });
});
