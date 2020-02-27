import { Component, OnInit } from "@angular/core";
import { Question, Answer } from "../../../models/DCquestions";

@Component({
  selector: "app-dc-questions",
  templateUrl: "./dc-questions.component.html",
  styleUrls: ["./dc-questions.component.css"]
})
export class DcQuestionsComponent implements OnInit {
  questions: Question[];
  question1: Answer[];
  question2: Answer[];
  question3: Answer[];
  clicked: boolean = false;

  constructor() {}

  ngOnInit() {
    this.questions = [
      {
        question: "Who is Batman",
        answers: [
          { correct: true, answer: "Bruce Wayne" },
          { correct: false, answer: "Clark Kent" },
          { correct: false, answer: "Slade Wilson" },
          { correct: false, answer: "Dick Grayson" }
        ]
      },
      {
        question:
          "What is the name of the commisoner who has befriended Batman?",
          answers: [
            { correct: false, answer: "Carl Bishops" },
            { correct: false, answer: "Harvey Bullock" },
            { correct: false, answer: "Tim Drake" },
            { correct: true, answer: "Commisoner Gordon" }
          ]
      },
      { question: "Which Batman villian is actually a vantrilquest dummy?",
    answers:  [
      { correct: false, answer: "The Riddler" },
      { correct: false, answer: "Clayface" },
      { correct: false, answer: "King Shark" },
      { correct: true, answer: "Scarface" }
    ]}
    ];
  }

  askQuestion() {
    this.clicked = true;
  }

  
}
