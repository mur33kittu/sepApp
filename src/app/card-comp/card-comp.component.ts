import { Component, OnInit, Input } from '@angular/core';
import { QuestionService } from '../question/question.service';

@Component({
  selector: 'app-card-comp',
  templateUrl: './card-comp.component.html',
  styleUrls: ['./card-comp.component.css']
})
export class CardCompComponent implements OnInit {
  @Input() header;
  @Input() mode = 'cardWithTitle';
  constructor() {
  }

  ngOnInit() {
    console.log(this.mode);
  }

}
