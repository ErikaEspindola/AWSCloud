import { TestBed } from '@angular/core/testing';

import { InstanciasService } from './instancias.service';

describe('InstanciasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InstanciasService = TestBed.get(InstanciasService);
    expect(service).toBeTruthy();
  });
});
