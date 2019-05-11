import {Component, OnInit} from '@angular/core';
import {Hero} from '../models/hero';
import {HeroService} from '../hero.service';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.scss', './style.components.scss']
})
export class HeroesComponent implements OnInit {

    hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };

    heroes: Hero[];
    selectedHero: Hero = this.hero;

    constructor(
        private heroService: HeroService,
    ) {

    }

    ngOnInit() {
        this.getMyHeroes();
    }

    getMyHeroes(): void {
        this.heroService.getHeroes()
            .subscribe((heroes) => {
                this.heroes = heroes;
            });
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
        this.log(hero);
    }

    log(myString) {
        console.log(myString);
    }

    changeName(heroName) {
        console.log(heroName);
    }

}
