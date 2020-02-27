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
    Answer: {
      correct: 'Bitten by radioactive spider',
      wrong: ['Killed a radioactive spider', 'Ate a radioactive spider', 'Let a radioactive spider burrow inside my skin']}
    },
    {Question: 'How many films were made with Hugh Jackman playing the Wolverine character?',
    Answers: {
      correct: 'Nine',
      wrong: ['Four', 'Seven', 'Five']}
    },
    {Question: 'Who played the Wonder Woman in the 2017 remake?',
    Answers: {
      correct: 'Gal Gadot',
      wrong: ['Catherine Zeta-Jones', 'Angelina Jolie', 'Sandra Bullock']}
    },
    {Question: 'Which newspaper does Peter Parker work for?',
    Answers: {
      correct: 'The Daily Prophet',
      wrong: ['The Daily News', 'The Prophet', 'Metro News']}
    },
    {Question: 'What actor played Ant-Man?',
    Answers: {
      correct: 'Paul Rudd',
      wrong: ['Joseph Gordon-Levitt', 'Sean Bean', 'Ewan McGregor']}
    },
    {Question: 'Who does Bruce Banner become?',
    Answer: {
      correct: 'The Hulk',
      wrong: ['Loki', 'Wolverine', 'Deadpool']}
    },
    {Question: 'The Fantastic Four have the headquarters in what building?',
    Answer: {
      correct: 'Baxter Building',
      wrong: ['Fantastic Headquarters', 'Stark Tower', 'Insititute']}
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  checkAnswer(marvel){
    if(marvel.Answer === "correct"){
      return true;
    } else {
      return false;
    };
  }
}
