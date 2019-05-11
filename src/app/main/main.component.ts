import {Component, OnInit} from '@angular/core';
import {HeroService} from '../hero.service';
import {Hero} from '../models/hero';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    title = 'Tour of Hero';
    heroes: Hero[];

    constructor(private heroService: HeroService,) {
    }

    ngOnInit() {
        this.getMyHeroes();
    }

    getMyHeroes(): void {
        this.heroService.getHeroes()
            .subscribe(heroes => this.heroes = heroes.slice(1, 5));
    }

}
