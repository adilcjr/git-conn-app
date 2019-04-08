import { TestBed } from '@angular/core/testing';

import { GitConnectorService } from './git-connector.service';
import { HttpClientModule } from '@angular/common/http';

describe('GitConnectorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [GitConnectorService]
  }));

  it('should be created', () => {
    const service: GitConnectorService = TestBed.get(GitConnectorService);
    expect(service).toBeTruthy();
  });
});
