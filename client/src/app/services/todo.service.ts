import { Injectable } from '@angular/core';

import { Todo } from '../class/todo'

import { Observable } from 'rxjs/Observable'
import { of } from 'rxjs/observable/of'

import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http'
import { MessageService } from './message.service'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

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

  updateTodo(todo: Todo): Observable<any> {
    return this.http.put(this.todoUrl, todo, httpOptions)
  }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todoUrl)
      .pipe(
        tap(() => this.log("Todos")),
        catchError(this.handleError('getHeroes', []))
      )
  }

  getTodo(id: number): Observable<Todo> {
    const url = `${this.todoUrl}/${id}`
    return this.http.get<Todo>(url)
      .pipe(
        tap(_ => this.log(`fetched todo id=${id}`)),
        catchError(this.handleError<Todo>(`getTodo id=${id}`))
      )
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todoUrl, todo, httpOptions)
      .pipe(
        tap((todo: Todo) => this.log(`added todo w/ id = ${todo.id}`)),
        catchError(this.handleError<Todo>('addTodo'))
      )
  }

  deleteTodo(todo: Todo): Observable<Todo> {
    const id = todo.id
    const url = `${this.todoUrl}/${id}`
    return this.http.delete<Todo>(url, httpOptions)
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error)
      this.log(`${operation} failed: ${error.message}`)
      return of(result as T)
    }
  }

  private log(message: string) {
    this.messageService.add('fetched' + message)
  }

  searchTodos(term: string): Observable<Todo[]> {
    if (!term.trim()) {
      return of([])
    }
    return this.http.get<Todo[]>(`api/todos/?name=${term}`).pipe(

    )
  }

}
