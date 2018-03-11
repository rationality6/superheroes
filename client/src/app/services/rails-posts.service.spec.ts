import { TestBed, inject } from '@angular/core/testing';

import { RailsPostsService } from './rails-posts.service';

describe('RailsPostsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RailsPostsService]
    });
  });

  it('should be created', inject([RailsPostsService], (service: RailsPostsService) => {
    expect(service).toBeTruthy();
  }));
});
