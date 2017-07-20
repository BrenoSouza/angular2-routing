import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]

})

// OnInit uma interface que tem um metodo que executa a operação assim que o componente é criado
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }
  ngOnInit(): void {
    // Pega todos os heroes e no slice defino a quantidade que vou exibir na tela
    this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 9));
  }
}
