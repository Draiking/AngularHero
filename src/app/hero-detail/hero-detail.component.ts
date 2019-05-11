import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Hero} from '../models/hero';
import {MessageService} from '../message.service';
import {HeroService} from '../hero.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

    @Input() hero: Hero;
    @Output() changeName = new EventEmitter();

    constructor(private messageService: MessageService,
                private route: ActivatedRoute,
                private heroService: HeroService,
                ) {
        this.messageService.sendDateSubject.subscribe((res) => {
            this.catchDate(res);
        } );
    }

    ngOnInit() {
        this.getHero();
    }

    heroNameChange(heroName: string): void {
        this.changeName.next(heroName);
    }

    catchDate(res: any): void {
        console.log(res, '+ hi');
    }

    getHero(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.heroService.getHero(id)
            .subscribe((hero) =>  {
                this.hero = hero;
            });
    }

}
