import { Component, OnInit } from '@angular/core';
import { Todo } from '../class/todo'
import { TodoService } from '../services/todo.service'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {
  todos: Todo[]

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit() {
    this.getTodos()
  }

  getTodos(): void {
    this.todoService.getTodos()
      .subscribe(todos => this.todos = todos)
  }

  add(todo: string): void {
    console.log(todo)
  }

  del(todo: Todo): void {
    this.todos = this.todos.filter(i => i !== todo)
    this.todoService.deleteTodo(todo).subscribe()
  }

}
