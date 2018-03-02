import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../class/todo'

import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'
import { TodoService } from '../services/todo.service'

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})

export class TodoDetailComponent implements OnInit {
  
  @Input() todo: Todo
  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
    private location: Location
  ) { }

  ngOnInit() {
    
  }

}
