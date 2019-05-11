import {Component, OnInit} from '@angular/core';
import {Hero} from '../models/hero';
import {HeroService} from '../hero.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.scss', './style.components.scss']
})
export class HeroesComponent implements OnInit {
    heroes: Hero[];

    constructor(private heroService: HeroService,
                private router: Router,
    ) {
    }

    ngOnInit() {
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroService.getHeroes()
            .subscribe((heroes) => {
                this.heroes = heroes;
                debugger;
            });
    }

    onSelect(hero: Hero) {
        /*this.router.navigateByUrl('detail/' + hero.id);*/
        this.router.navigateByUrl(`detail/${hero.id}`);
    }
}
