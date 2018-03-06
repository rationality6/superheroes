import { Component, OnInit } from '@angular/core';
import { Todo } from '../class/todo'
import { TodoService } from '../services/todo.service'

import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators'

@Component({
  selector: 'app-todo-search',
  templateUrl: './todo-search.component.html',
  styleUrls: ['./todo-search.component.css']
})
export class TodoSearchComponent implements OnInit {
  todos$: Observable<Todo[]>

  private searchTerms = new Subject<string>()

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.todos$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.todoService.searchTodos(term))
    )
  }

  search(term: string): void {
    this.searchTerms.next(term)
  }

}
