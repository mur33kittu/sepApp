import { Component, OnInit } from '@angular/core';
import { QuestionService } from './question/question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [QuestionService]
})
export class AppComponent implements OnInit {
  questions = [];
  questions1 = [];
  questions2 = [];
  template: boolean = true;
  constructor(quesService: QuestionService) {
    this.questions = quesService.getQuestions();
    // console.log(this.questions);
    this.questions1 = this.questions.filter(elem => (elem.key === 'emailAddress' || elem.key === 'gender'))
    this.questions2 = this.questions.filter(elem => (elem.key === 'brave' || elem.key === 'gender'))
  }

  ngOnInit() {
    console.log(this.template);
  }

  toggle() {
    this.template = this.template === true ? false : true;
  }
}
