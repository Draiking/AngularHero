import {Injectable} from '@angular/core';
import { Observable, of } from 'rxjs';

import {Hero} from './models/hero';
import {HEROES} from './mock-heroes';


/*@Injectable({
    providedIn: 'root'
})*/

@Injectable()

export class HeroService {

    constructor() {
    }

 /*   getHeroes(): Hero[] {
        return HEROES;
    }*/

    getHeroes(): Observable<Hero[]> {
        return of(HEROES);
    }
}
