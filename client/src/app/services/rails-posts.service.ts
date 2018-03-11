import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Rx';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RailsPostsService {
  private dotoUrl = 'api/todos'
  private url = "http://localhost:3000/posts.json"
  // private url = "https://jsonplaceholder.typicode.com/users"

  constructor(
    private http: HttpClient
  ) {

  }

  getPosts(): Observable<any> {
    return this.http.get<any>(this.url).
      pipe(

      )
  }

}
