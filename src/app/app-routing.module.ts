import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarvelComponent } from './marvel/marvel.component';
import { MoviesVsComicsComponent } from './movies-vs-comics/movies-vs-comics.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  
  { path: 'marvel', component: MarvelComponent },
  // { path: 'dc', component: dc-component },
  { path: 'comics-vs-movies', component: MoviesVsComicsComponent },
  { path: '', component: MainPageComponent }
  
];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }