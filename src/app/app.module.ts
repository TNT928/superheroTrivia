import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DcQuestionsComponent } from './dc-questions/dc-questions.component';
import { MarvelComponent } from './marvel/marvel.component';
import { MoviesVsComicsComponent } from './movies-vs-comics/movies-vs-comics.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';
const AppRoutes: Routes = [
  { path: 'marvel', component: MarvelComponent },
//  { path: 'dc', component: dc-component },
  { path: 'comicsvsmovies', component: MoviesVsComicsComponent },
  { path: '', component: MainPageComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    MarvelComponent,
    MoviesVsComicsComponent,
    MainPageComponent,
    DcQuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
