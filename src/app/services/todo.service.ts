import { Injectable } from '@angular/core';

import { Todo } from '../class/todo'

import { Observable } from 'rxjs/Observable'
import { of } from 'rxjs/observable/of'

import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http'
import { MessageService } from './message.service'


@Injectable()
export class TodoService {

  private todoUrl = 'api/todos'

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getTodos()
  }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todoUrl)
      .pipe(
        tap(() => this.log("Todos"))
      )
  }

  private log(message: string) {
    this.messageService.add('fetched' + message)
  }

}
