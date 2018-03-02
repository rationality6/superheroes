import { Injectable } from '@angular/core';

import { Todo } from '../class/todo'

import { Observable } from 'rxjs/Observable'
import { of } from 'rxjs/observable/of'

import { catchError, map, tap } from 'rxjs/operators';

import { TODOS } from '../mock-todos'

import { HttpClient, HttpHeaders } from '@angular/common/http'


@Injectable()
export class TodoService {

  private todoUrl = 'api/todos'

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getTodos()
  }

  getTodos(): Observable<Todo[]> {
    // return of(TODOS)
    return this.http.get<Todo[]>(this.todoUrl)

  }

}
