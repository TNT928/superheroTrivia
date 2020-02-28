import { Component, OnInit } from "@angular/core";
import { Question, Answer } from "../../../models/DCquestions";

@Component({
  selector: "app-dc-questions",
  templateUrl: "./dc-questions.component.html",
  styleUrls: ["./dc-questions.component.css"]
})
export class DcQuestionsComponent implements OnInit {
  // questions: Question[];
  questions = [
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
      question: "What is the name of the commisoner who has befriended Batman?",
      answers: [
        { correct: false, answer: "Carl Bishops" },
        { correct: false, answer: "Harvey Bullock" },
        { correct: false, answer: "Tim Drake"},
        { correct: true, answer: "Commisoner Gordon" }
      ]
    },
    {
      question: "Which Batman villian is actually a vantrilquest dummy?",
      answers: [
        { correct: false, answer: "The Riddler" },
        { correct: false, answer: "Clayface" },
        { correct: false, answer: "King Shark" },
        { correct: true, answer: "Scarface" }
      ]
    },
    {
      question: "Who causes Batgirl to become Oracle",
      answers: [
        { correct: false, answer: "Two-Face" },
        { correct: false, answer: "Harley Quinn" },
        { correct: true, answer: "The Joker" },
        { correct: false, answer: "Bane" }
      ]
    },
    {
      question: "What was the Jokers orginal crime persona?",
      answers: [
        { correct: true, answer: "The Red Hood" },
        { correct: false, answer: "Jester Man" },
        { correct: false, answer: "Arkham Knight" },
        { correct: false, answer: "The Riddler" }
      ]
    }
  ];

  clicked: boolean = false;
  question: any;

  constructor() {}

  ngOnInit() {
    this.next();
  }

  askQuestion() {
    this.clicked = true;
  }

  onClick(question) {
    console.log(question.correct);
  }

  next() {
    [Math.floor(Math.random() * Math.floor(this.questions.length))];
  }
}
