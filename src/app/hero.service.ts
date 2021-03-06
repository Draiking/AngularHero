import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import {Hero} from './models/hero';
import {HEROES} from './mock-heroes';
import {MessageService} from './message.service';
import {HttpClient} from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})


export class HeroService {

    constructor(private messageService: MessageService,
                private httpClient: HttpClient,
    ) {
    }

    /*   getHeroes(): Hero[] {
           return HEROES;
       }*/

    getHeroes(): Observable<any> {
        this.messageService.add('HeroService: fetched heroes');
        return this.httpClient.get(`api/heroes`);
    }

    getHero(id: number): Observable<Hero> {
        // TODO: send the message _after_ fetching the hero
        this.messageService.add(`HeroService: fetched hero id=${id}`);
        return of(HEROES.find(hero => hero.id === id));
    }
}
