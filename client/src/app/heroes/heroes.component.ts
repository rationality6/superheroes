import { Component, OnInit } from '@angular/core';
import { Hero } from '../class/hero'
import { HeroService } from '../services/hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[]
  selectedHero: Hero
  constructor(private heroService: HeroService) {

  }

  ngOnInit() {
    this.getHeroes()
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero)
      })
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(i => i !== hero)
    this.heroService.deleteHero(hero).subscribe()
  }

}
