import {Injectable} from '@angular/core';

import {HEROES} from './mock-heroes';
import {Hero} from './hero';

@Injectable()
export class HeroService {

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
  // ????????????
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Igual o funcionamento no angular 1
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
  }
}
