import { Component, OnInit } from "@angular/core";
// import { Question, Answer } from "../../../models/DCquestions";

@Component({
  selector: "app-dc-questions",
  templateUrl: "./dc-questions.component.html",
  styleUrls: ["./dc-questions.component.css"]
})
export class DcQuestionsComponent implements OnInit {
  // questions: Question[];
  // question1: Answer[];
  // question2: Answer[];
  // question3: Answer[];
  closeModal;
  clicked: boolean = false;
  
  question: any;
  open : boolean = false;
  correct : boolean = false;
  // Question : string;
  // Answers : boolean;
  
  dc = [
    {
      Question: 'Who is Batman?',
      Answers: ['Bruce Wayne', 'Clark Kent', 'Slade Wilson', 'Dick Grayson'],
      Correct: 'Bruce Wayne'
    },
    {
      Question: 'What is the name of the commisoner who has befriended Batman?',
      Answers: ['Carl Bishops', 'Harvey Bullock', 'Tim Drake', 'Commisoner Gordon'],
      Correct: 'Commisoner Gordon'
    },
    {
      Question: 'Which Batman villian is actually a vantrilquest dummy?',
      Answers: ['The Riddler', 'Clayface', 'Scarface', 'King Shark'],
      Correct: 'Scarface'
    },
    
  ];
  
  constructor() {}
  
  
  // ngOnInit() {
  //   this.questions = [
  //     {
  //       question: "Who is Batman",
  //       answers: [
  //         { correct: true, answer: "Bruce Wayne" },
  //         { correct: false, answer: "Clark Kent" },
  //         { correct: false, answer: "Slade Wilson" },
  //         { correct: false, answer: "Dick Grayson" }
  //       ]
  //     },
  //     {
  //       question:
  //       "What is the name of the commisoner who has befriended Batman?",
  //       answers: [
  //         { correct: false, answer: "Carl Bishops" },
  //         { correct: false, answer: "Harvey Bullock" },
  //         { correct: false, answer: "Tim Drake" },
  //         { correct: true, answer: "Commisoner Gordon" }
  //       ]
  //     },
  //     { question: "Which Batman villian is actually a vantrilquest dummy?",
  //     answers:  [
  //       { correct: false, answer: "The Riddler" },
  //       { correct: false, answer: "Clayface" },
  //       { correct: false, answer: "King Shark" },
  //       { correct: true, answer: "Scarface" }
  //     ]}
  //   ];
  // }
  
  askQuestion() {
    this.clicked = true;
  }
  // onclick(){
  //   this.questions;
  // }
  
  ngOnInit() {
    this.next();
  }
  
  checkAnswer(answer, question){
    this.open = true;
    this.correct = (answer === question.Correct);
  };
  
  next(){
    this.open = false;
    this.question =  this.dc[Math.floor(Math.random() * Math.floor(this.dc.length))];
  }
  
  //   clicked: boolean = false;
  //   // question: any;
  // dcQuestions: any
  // dcAnswers:any
  //   constructor() {}
  //   question : any;
  
  
  
  //   questionNumber : number = 0;
  //   ngOnInit() {
  //     this.next();
  //   }
  
  // ngOnInit() {
  //   this.next();
  // }
  
  // checkAnswer(answer, question){
  //   this.open = true;
  //   this.correct = (answer === question.Correct);
  // };
  
  // next(){
  //   this.open = false;
  //   this.question =  this.dc[Math.floor(Math.random() * Math.floor(this.dc.length))];
  // }
  
  //   onClick(question) {
  //     console.log(question.correct);
  //   }
  
  //   next() {
  //     const index = Math.floor(Math.random() * Math.floor(this.questions.length));
  //     this.question = this.questions[index];
  //     this.questions.splice(index, 1);
  //     console.log(this.question);
  //   }
  // askQuestion() {
  //   this.clicked = true;
  //   // this.dcQuestions = this.questions[this.questionNumber].question;
  //   // this.questionNumber++;
  //   // console.log(this.dcQuestions)
  
  // }
}