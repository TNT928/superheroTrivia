import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarvelComponent } from './marvel/marvel.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviesVsComicsComponent } from './movies-vs-comics/movies-vs-comics.component';
import { MainPageComponent } from './main-page/main-page.component';

import { RouterModule, Routes } from '@angular/router';

const AppRoutes: Routes = [
  { path: 'marvel', component: MarvelComponent },
  { path: 'dc', component: dc-component },
  { path: 'comicsvsmovies', component: MoviesVsComicsComponent },
  { path: '/', component: MainPageComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    MarvelComponent,
    MoviesVsComicsComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
