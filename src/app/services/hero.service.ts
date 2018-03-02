import { Injectable } from '@angular/core';

import { Hero } from '../class/hero'
import { MessageService } from './message.service'

import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Observable } from 'rxjs/Observable'
import { of } from 'rxjs/observable/of'

import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class HeroService {

  private heroesUrl = 'api/heroes'

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      // .pipe(
      //   tap(heroes => this.log(`fetched heroes`)),
      //   catchError(this.handleError('getHeroes', []))
      // );
  }

  getHero(id: number): Observable<Hero> {
    // this.messageService.add(`HeroService: fetched hero id=${id}`)
    // return of(HEROES.find(hero => hero.id === id))
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(this.heroesUrl)
      .pipe(
        tap(_ => this.log(`fetched hero id=${id}`)),
        catchError(this.handleError<Hero>(`getHero id=${id}`))
      )
  }

  private log(message: string) {
    this.messageService.add('HeroService: ' + message)
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error)
      this.log(`${operation} failed: ${error.message}`)
      return of(result as T);
    };
  }


}
