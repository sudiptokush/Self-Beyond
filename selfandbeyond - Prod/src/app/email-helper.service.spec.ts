import { TestBed, inject } from '@angular/core/testing';

import { EmailHelperService } from './email-helper.service';

describe('EmailHelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmailHelperService]
    });
  });

  it('should ...', inject([EmailHelperService], (service: EmailHelperService) => {
    expect(service).toBeTruthy();
  }));
});
