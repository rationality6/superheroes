import { Injectable } from '@angular/core';

import { Todo } from '../class/todo'

import { Observable } from 'rxjs/Observable'
import { of } from 'rxjs/observable/of'

import { catchError, map, tap } from 'rxjs/operators';

import { TODOS } from '../mock-todos'

@Injectable()
export class TodoService {


  constructor() { }

  ngOnInit(): void {
    this.getTodos()
  }

  getTodos(): Observable<Todo[]> {
    return of(TODOS)
  }

}
