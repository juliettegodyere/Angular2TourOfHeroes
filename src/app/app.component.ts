import { Component} from '@angular/core';
import { HeroService } from './hero.service';

import { Hero } from './hero';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
	<h2>My Heroes</h2>
  <ul class="heroes">
      <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <my-hero-detail [hero]="selectedHero"></my-hero-detail>
`,
 styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
providers: [HeroService]

})
export class AppComponent{
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { 
  	this.heroes = this.heroService.getHeroes();

  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

// getHeroes(): void {
//    // this.heroService.getHeroes().then(heroes => this.heroes = heroes);

// }

//     ngOnInit(): void {
//     	this.getHeroes();
//   }

  // heroes = [
  //   new Hero(1, 'Windstorm'),
  //   new Hero(13, 'Bombasto'),
  //   new Hero(15, 'Magneta'),
  //   new Hero(20, 'Tornado')
  // ];
  // myHero = this.heroes[0];
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
