import { Component, OnInit } from '@angular/core';

import { RailsPostsService } from '../services/rails-posts.service'

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})

export class PlaygroundComponent implements OnInit {

  constructor(
    private railsPostsService: RailsPostsService
  ) {

  }

  ngOnInit() {
    this.getData()
  }

  test(n: string): void {
    console.log(n);
  }

  getData() {
    this.railsPostsService.getPosts()
  }


}
