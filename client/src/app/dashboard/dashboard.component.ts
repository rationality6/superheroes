import { Component, OnInit } from '@angular/core';
import { Hero } from '../class/hero'
import { HeroService } from '../services/hero.service'

import { InMemoryDataService } from '../in-memory-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [
    { provide: XHRBackend, useClass: InMemoryDataService } // in-mem server
    // { provide: SEED_DATA, useClass: InMemoryDataService }      // in-mem server data
  ]
})

export class DashboardComponent implements OnInit {
  heroes: Hero[] = []
  constructor(
    private heroService: HeroService
  ) {

  }

  ngOnInit() {
    this.getHeroes()
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(0, 4))
  }
}
