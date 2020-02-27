import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-movies-vs-comics",
  templateUrl: "./movies-vs-comics.component.html",
  styleUrls: ["./movies-vs-comics.component.css"]
})
export class MoviesVsComicsComponent implements OnInit {
  @Input() question: string;
  @Input() answer: string;

  comicsQuestions = [
    {
      question:
        "In the movies, Thor is an extraterrestrial god who happens to end up on Earth. In the Marvel 616 universe, however, he has a human alter ego. What is Thor’s human name?",
      answer: "Doctor Donald Blake"
    },
    {
      question: "In the comics, what was the original lineup of The Avengers?",
      answer: "Iron Man, Thor, Ant-Man, and Wasp"
    },
    {
      question:
        "The Marvel character Falcon has what additional power in the comics?",
      answer: "He can telepathically communicate with and control birds"
    },
    {
      question:
        "Pietro and Wanda Maximoff, in the Marvel Universe, exist as Quicksilver and Scarlet Witch, twins who were experimented on and given powers by Hydra. What is their origin in the comics?",
      answer: "They are mutants and the children of Magneto"
    },
    {
      question:
        "Since the X-Men property is owned by Fox and the rest of the Marvel universe is owned by Disney, Marvel has had to work around copyright issues in stories that deal with mutants. What term does the Marvel universe use to reference mutants?",
      answer: "Inhumans"
    },
    {
      question: "In the comics, who is Ultron created by?",
      answer: "Hank Pym, the original Ant Man"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
