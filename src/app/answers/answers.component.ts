import { Component, OnInit, Input } from '@angular/core';
import { MarvelComponent } from '../marvel/marvel.component';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {

  @Input()
  marvel : MarvelComponent;

  @Input()
  open : boolean = false;

  @Input()
  correct : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  openModal() {
    if(this.open === false){
    this.open = true;
  } else {
    this.open = false;
  }  
  }  

closePopout(){
  this.open = false;
}

}
