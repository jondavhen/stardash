import { TestBed } from '@angular/core/testing';

import { TickService } from './tick.service';
import {ApolloTestingModule} from 'apollo-angular/testing';

describe('TickService', () => {
  let service: TickService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApolloTestingModule]
    });
    service = TestBed.inject(TickService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
