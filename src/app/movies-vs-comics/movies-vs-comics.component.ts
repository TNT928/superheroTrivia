import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-movies-vs-comics",
  templateUrl: "./movies-vs-comics.component.html",
  styleUrls: ["./movies-vs-comics.component.css"]
})
export class MoviesVsComicsComponent implements OnInit {
  @Input() question: string;
  @Input() answers: string;
  @Input() correct: string;

  comicsQuestions = [
    {
      question:
        "In the movies, Thor is an extraterrestrial god who happens to end up on Earth. In the Marvel 616 universe, however, he has a human alter ego. What is Thor’s human name?",
      correct: "Doctor Donald Blake",
      answers: ""
    },
    {
      question: "In the comics, what was the original lineup of The Avengers?",
      answer: "Iron Man, Thor, Ant-Man, and Wasp",
      id: true
    },
    {
      question:
        "The Marvel character Falcon has what additional power in the comics?",
      answer: "He can telepathically communicate with and control birds",
      id:true
    },
    {
      question:
        "Pietro and Wanda Maximoff, in the Marvel Universe, exist as Quicksilver and Scarlet Witch, twins who were experimented on and given powers by Hydra. What is their origin in the comics?",
      answer: "They are mutants and the children of Magneto",
      id:true
    },
    {
      question:
        "Since the X-Men property is owned by Fox and the rest of the Marvel universe is owned by Disney, Marvel has had to work around copyright issues in stories that deal with mutants. What term does the Marvel universe use to reference mutants?",
      answer: "Inhumans", 
      id:true
    },
    {
      question: "In the comics, who is Ultron created by?",
      answer: "Hank Pym, the original Ant Man",
      id: true
    }
  ];

  constructor() {}

  ngOnInit() {}

  getAnswer(answer:string, index: number){
    if (answer !== answer){
      return "Wrong!"; //Add modal popup that is triggered by this function??
      this.comicsQuestions.splice(index, 1);
    } else {
      return "Right!";
    }
  };
}
