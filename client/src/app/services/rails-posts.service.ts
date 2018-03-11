import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class RailsPostsService {

  private dotoUrl = 'api/todos'

  constructor(
    private http: HttpClient
  ) {

  }

  getPosts(){
    console.log("getPosts")
  }

}
