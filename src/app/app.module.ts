import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
<<<<<<< HEAD
import { MarvelComponent } from './marvel/marvel.component';
import { HttpClientModule } from '@angular/common/http';

=======
=======
import { MoviesVsComicsComponent } from './movies-vs-comics/movies-vs-comics.component';
>>>>>>> 67580f355803c0fd8d4fc40cded0618aab980914
import { MainPageComponent } from './main-page/main-page.component';

import { RouterModule, Routes } from '@angular/router';

const AppRoutes: Routes = [
  // { path: 'marvel', component: marvel-component },
  // { path: 'dc', component: dc-component },
  // { path: 'comicsvsmovies', component: comics-vs-movies-component }
]
>>>>>>> f553d1fa0a81bf53ce0488645b7430bcac1da3a4

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
<<<<<<< HEAD
    MarvelComponent
=======
=======
    MoviesVsComicsComponent,
>>>>>>> 67580f355803c0fd8d4fc40cded0618aab980914
    MainPageComponent
>>>>>>> f553d1fa0a81bf53ce0488645b7430bcac1da3a4
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    HttpClientModule
=======
    RouterModule.forRoot(AppRoutes),
>>>>>>> f553d1fa0a81bf53ce0488645b7430bcac1da3a4
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
