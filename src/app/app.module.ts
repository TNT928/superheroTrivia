import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { DcQuestionsComponent } from './dc-questions/dc-questions.component';
import { MarvelComponent } from './marvel/marvel.component';
import { MoviesVsComicsComponent } from './movies-vs-comics/movies-vs-comics.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RouterModule, Routes } from '@angular/router';
import { AnswersComponent } from './answers/answers.component';

const AppRoutes: Routes = [
  { path: 'marvel', component: MarvelComponent },
  { path: 'dc', component: DcQuestionsComponent },
  { path: 'comicsvsmovies', component: MoviesVsComicsComponent },
  { path: '', component: MainPageComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    MarvelComponent,
    MoviesVsComicsComponent,
    MainPageComponent,
    DcQuestionsComponent,
    AnswersComponent,
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
