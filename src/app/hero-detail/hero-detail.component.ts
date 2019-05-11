import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Hero} from '../models/hero';

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

    @Input() hero: Hero;
    @Output() changeName = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
        console.log(this.hero);
    }

    heroNameChange(heroName: string): void {
        this.changeName.next(heroName);
    }

}
