import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { DashboardComponent } from './dashboard/dashboard.component'
import { HeroesComponent } from './heroes/heroes.component'
import { HeroDetailComponent } from './hero-detail/hero-detail.component'
import { TodoListComponent } from './todo-list/todo-list.component'
import { TodoDetailComponent } from './todo-detail/todo-detail.component'
import { PlaygroundComponent } from './playground/playground.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },

  { path: 'heroes', component: HeroesComponent },
  { path: 'heroes_detail/:id', component: HeroDetailComponent },

  { path: 'todolist', component: TodoListComponent },
  { path: 'todolist_detail/:id', component: TodoDetailComponent },

  { path: 'playground', component: PlaygroundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule { }
