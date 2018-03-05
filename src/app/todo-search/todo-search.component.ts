import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-search',
  templateUrl: './todo-search.component.html',
  styleUrls: ['./todo-search.component.css']
})
export class TodoSearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChange()
    )
  }

  search(term: string): void {
    this.searchTerms.next(term)
  }

}
