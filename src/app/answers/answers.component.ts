import { Component, OnInit, Input, Output } from '@angular/core';
import { MarvelComponent } from '../marvel/marvel.component';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {

  @Input()
  marvel : MarvelComponent;

  @Input()
  correct : boolean = false;

  @Output()
  close = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  closeModal() {
    this.close.emit();
  }  

  // closePopout(){
  //   this.open = false;
  // }

}
