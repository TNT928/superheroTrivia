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
    Answer: ['Bitten by radioactive spider', 'Killed a radioactive spider', 'Ate a radioactive spider', 'Let a radioactive spider burrow inside my skin'],
    Correct: 'Bitten by radioactive spider'
    },
    {Question: 'How many films were made with Hugh Jackman playing the Wolverine character?',
    Answers: ['Nine','Four', 'Seven', 'Five'],
    Correct: 'Nine'
    },
    {Question: 'Who played the Wonder Woman in the 2017 remake?',
    Answers: ['Gal Gadot', 'Catherine Zeta-Jones', 'Angelina Jolie', 'Sandra Bullock'],
    Correct: 'Gal Gadot'
    },
    {Question: 'Which newspaper does Peter Parker work for?',
    Answers: ['The Daily Prophet', 'The Daily News', 'The Prophet', 'Metro News'],
    Correct: 'The Daily Prophet'
    },
    {Question: 'What actor played Ant-Man?',
    Answers: ['Paul Rudd', 'Joseph Gordon-Levitt', 'Sean Bean', 'Ewan McGregor'],
    Correct: 'Paul Rudd'
    },
    {Question: 'Who does Bruce Banner become?',
    Answer: ['The Hulk', 'Loki', 'Wolverine', 'Deadpool'],
    Correct: 'The Hulk'
    },
    {Question: 'The Fantastic Four have the headquarters in what building?',
    Answer: ['Baxter Building', 'Fantastic Headquarters', 'Stark Tower', 'Insititute'],
    Correct: 'Baxter Building'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  checkAnswer(marvel){
    if(marvel.Answers === !marvel.Correct){
      return false;
    } else {
      return true;
    };
  };

  next(marvel){
    return marvel.Question[Math.floor(Math.random() * Math.floor(marvel.length))];
  }
}
