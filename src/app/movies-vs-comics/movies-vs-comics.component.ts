import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-movies-vs-comics",
  templateUrl: "./movies-vs-comics.component.html",
  styleUrls: ["./movies-vs-comics.component.css"]
})
export class MoviesVsComicsComponent implements OnInit {
  @Input() Question : string;
  @Input() Answers : string;
  @Input() Correct : string;
  // @Input() open : boolean = false;

  moviesVsComics = [
    {Question: "In the movies, Thor is an extraterrestrial god who happens to end up on Earth. In the Marvel 616 universe, however, he has a human alter ego. What is Thor’s human name?",
    Answers: ["Mr. Dave Pilkey", " Dr. Donald Glover", "Tony Stark", "Dr. Donald Blake"],
    Correct:"Dr. Donald Blake"},
    {Question: "In the comics, what was the original lineup of The Avengers?",
    Answers: ["Iron Man, Black Widow, Thor, Hulk", "Black Widow, Spiderman, Ant-man, Wasp", "Iron Man, Starlord, Thor, Hulk", "Iron Man, Thor, Ant-man, Wasp"],
    Correct:"Iron Man, Thor, Ant-man, Wasp"},
    {Question: "The Marvel character Falcon has what additional power in the comics?",
    Answers: ["He had actual bird wings", "He could scream like a falcon", "He could see objects clearly from over a mile away", "He could telepathically communicate with and control birds"],
    Correct:"He could telepathically communicate with and control birds"},
    {Question: "Pietro and Wanda Maximoff, in the Marvel Universe, exist as Quicksilver and Scarlet Witch. What is their origin in the comics?",
    Answers: ["They were born from a toxic ooze dump", "They were a married couple who did genetic experiments on themselves", "They were aliens who were trapped on Earth", "They were mutants and the children of Magneto"],
    Correct:"They were mutants and the children of Magneto"},
    {Question: "Since the X-Men property is owned by Fox and the rest of the Marvel universe is owned by Disney, Marvel has had to work around copyright issues in stories that deal with mutants. What term does the Marvel universe use to reference mutants?",
    Answers: ["Weirdos", "Creepizoids", "Unnaturals", "Inhumans"],
    Correct:"Inhumans"},
    {Question: "In the comics, who is Ultron created by?",
    Answers: ["Tony Stark", "Dr. Donald Blake", "Clint Barton", "Hank Pym"],
    Correct:"Hank Pym"}
  ];

  question: any;
  score: number;

  constructor() {}

  ngOnInit() {
    this.next();
  }

  checkAnswer(answer, question){
    if(answer === question.Correct){
      alert('Correct!');
    } else {
      alert('Oh boo dawg, that aint it')
    };
  };

  next(){
    this.question =  this.moviesVsComics[Math.floor(Math.random() * Math.floor(this.moviesVsComics.length))];
  }

  keepScore(){
    let score = 0;
    if (this.Answers === this.question.Correct){
      score++;
    };
    if (score => 5){
      alert("You're a nerd! Congrats!")
    };
  }
}
