
// BrowserModule prepara a aplicação para ser executada em um browser
// Modulo de funcionalidade não importa o BrowserM, importa o CommomModule
// É preciso importar o submodulo:
// 1- No modulo raiz tem que fazer import do submodulo no metadados 'import'
// 2- Dar import no arquivo do Modulo
// 3- Declarar no submodulo um metadado 'exports' e nele adicionar o component principal do submodulo
// Precisa pegar o selector dos submod e criar uma tag no html
// OBS: Quando gerar um novo component no submodulo pelo cli, automaticamente ele já vai declarar

import { BrowserModule } from '@angular/platform-browser';
// A diretiva ngModel faz parte desse modulo de formulário
import { FormsModule }   from '@angular/forms';

import { HttpModule }    from '@angular/http';

// Importando modulo de rotas
import { RouterModule }   from '@angular/router';

// Tem que importar os decorators, e a maioria esta no @angular/core
import { NgModule } from '@angular/core';

// Imports das classes/services do projeto
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';

import { HeroService } from './hero.service';

import { AppRoutingModule } from './app-routing.module';

// Decorator NgModule que faz com que a classe represente um Módulo
@NgModule({
  // Metadados declarados dentro do modulo: declarations, imports, providers e bootstrap

  declarations: [
    // Declarar todos os components, diretivas e pipes que queremos utilizar nesse módulo
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  imports: [
    // Coloca outros modulos que quer utilizar ou dentro de algum component(declarations) que pertence a esse modulo
    BrowserModule,
    FormsModule,
    HttpModule,

    // Modulo de rotas é no import que adiciona
    // RouterModule.forRoot([
    //   {
    //     path: 'heroes',
    //     component: HeroesComponent
    //   },
    //   {
    //     path: 'dashboard',
    //     component: DashboardComponent
    //   },
    //   {
    //     path: '',
    //     redirectTo: '/dashboard',
    //     pathMatch: 'full'
    //   },
    //   {
    //     path: 'detail/:id',
    //     component: HeroDetailComponent
    //   },
    //
    // ])

    //Pode usar um arquivo separado
    // Tem que definir a url base no index.html
    AppRoutingModule
  ],

  // Coloca os serviçoes para todos os components;
  providers: [HeroService],

  // Só no modulo raiz, declara o componente que vai ser instanciado no projeto/ container do projeto
  // Então num modulo de funcionalidade não terá esse metadado
  bootstrap: [AppComponent]
})

//Declaração da classe seguindo as convenções do StyleGuide
export class AppModule { }
