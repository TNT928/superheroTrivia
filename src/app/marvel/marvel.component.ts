import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.component.html',
  styleUrls: ['./marvel.component.css']
})
export class MarvelComponent implements OnInit {

  @Input()
  Question : string;

  @Input()
  Answers : boolean;

  marvel = [
    {Question: 'How did Spider-Man get his superpowers?',
    Answers: ['Killed a radioactive spider', 'Bitten by radioactive spider', 'Ate a radioactive spider', 'Let a radioactive spider burrow inside my skin'],
    Correct: 'Bitten by radioactive spider'
    },
    {Question: 'How many films were made with Hugh Jackman playing the Wolverine character?',
    Answers: ['Nine','Four', 'Seven', 'Five'],
    Correct: 'Nine'
    },
    {Question: 'Who played the Wonder Woman in the 2017 remake?',
    Answers: [ 'Catherine Zeta-Jones', 'Angelina Jolie', 'Gal Gadot', 'Sandra Bullock'],
    Correct: 'Gal Gadot'
    },
    {Question: 'Which newspaper does Peter Parker work for?',
    Answers: ['The Daily Prophet', 'The Daily News', 'The Prophet', 'Metro News'],
    Correct: 'The Daily Prophet'
    },
    {Question: 'What actor played Ant-Man?',
    Answers: ['Joseph Gordon-Levitt', 'Sean Bean', 'Ewan McGregor', 'Paul Rudd'],
    Correct: 'Paul Rudd'
    },
    {Question: 'Who does Bruce Banner become?',
    Answers: [ 'Loki', 'The Hulk', 'Wolverine', 'Deadpool'],
    Correct: 'The Hulk'
    },
    {Question: 'The Fantastic Four have the headquarters in what building?',
    Answers: ['Fantastic Headquarters', 'Stark Tower', 'Baxter Building', 'Insititute'],
    Correct: 'Baxter Building'
    }
  ];

  question: any;

  constructor() { }

  ngOnInit() {
    this.next();
  }

  checkAnswer(answer, question){
    if(answer === question.Correct){
      console.log('correct');
    } else {
      console.log('incorrect');
    };
  };

  next(){
    this.question =  this.marvel[Math.floor(Math.random() * Math.floor(this.marvel.length))];
  }
}
