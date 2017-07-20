import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';

// As rotas depende de dois atributos ‘path’ e ‘component’
//A url e o nome do componente a serem exibidos, respectivamente.
// path vazio, redireciona automaticamente para o /dashboard
const routes: Routes = [
  //pathMatch define a estratégia adotada
  // Não entendi direito mas tem o full, que redireciona para o / e tem o prefix
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
