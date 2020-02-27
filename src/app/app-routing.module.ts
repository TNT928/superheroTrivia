import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarvelComponent } from './marvel/marvel.component';


const routes: Routes = [
  {
    path: 'marvel',
    component: MarvelComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
