import { Component, OnInit } from '@angular/core';
import{ Answer} from '../../../models/DCquestions'

@Component({
  selector: 'app-dc-questions',
  templateUrl: './dc-questions.component.html',
  styleUrls: ['./dc-questions.component.css']
})
export class DcQuestionsComponent implements OnInit {
 
  question1: Answer[]
  question2: Answer[]
  question3: Answer[]
  clicked: boolean =false

  constructor() { }

  ngOnInit() {

    
      this.question1 = [
        {question: 'Who is Batman?'},
        {correct: true,answer: 'Bruce Wayne' },
        {correct:false, answer: 'Clark Kent'},
        {correct: false, answer: 'Slade Wilson'},
        {correct: false, answer: 'Dick Grayson'}
      ]

      this.question2= [
        {question:'What is the name of the commisoner who has befriended Batman?'},
        {correct: false, answer: 'Carl Bishops'},
        {correct: false, answer: 'Harvey Bullock'},
        {correct: false, answer: 'Tim Drake'},
        {correct: true, answer: 'Commisoner Gordon'}
      ]

      this.question3=[
        {question: 'Which Batman villian is actually a vantrilquest dummy?'},
        {correct: false, answer: 'The Riddler'},
        {correct: false, answer: 'Clayface'},
        {correct: false, answer: 'King Shark'},
        {correct: true, answer:'Scarface'}
      ]

    }

    askQuestion(){
      this.clicked=  true
     
    }
  

}
