import { Component, OnInit } from '@angular/core';
import { RailsPostsService } from '../services/rails-posts.service'

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})

export class PlaygroundComponent implements OnInit {
  posts;

  constructor(
    private railsPostsService: RailsPostsService
  ) {

  }

  ngOnInit() {
    this.getPosts()
  }

  test(n: string): void {
    console.log(n);
  }

  getPosts(): void {
    this.railsPostsService.getPosts()
      .subscribe(data => {
        return this.posts = data
      })
  }

}
