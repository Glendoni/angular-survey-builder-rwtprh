import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Survey, TYPE } from './model';

@Component({
  selector: 'app-survey-form',
  templateUrl: './surveyform.component.html',
  styleUrls: ['./surveyform.component.scss']
})
export class SurveyFormComponent implements OnInit {
  _data: Survey;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route
      .data
      .subscribe((s: Survey) => {
        this.createForm(s);
      });
  }

  createForm(s: Survey) {
    console.log(s)
  }
}
