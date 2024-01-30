import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Survey, TYPE } from './model';
//import { isArray } from 'util';

@Component({
  selector: 'app-survey-form',
  templateUrl: './surveyform.component.html',
  styleUrls: ['./surveyform.component.scss'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          opacity: 1,
        })
      ),
      state(
        'closed',
        style({
          display: 'none',
          opacity: 0,
        })
      ),
      transition('open => closed', [animate('200ms ease-out')]),
      transition('closed => open', [animate('200ms 200ms ease-in')]),
    ]),
  ],
})
export class SurveyFormComponent implements OnInit {
  @Input() set data(s: Survey) {
    this.createForm(s);
  }
  @Output() surveySubmit = new EventEmitter();
  _data: Survey;
  fg: FormGroup = new FormGroup({});
  active = 0;

  constructor() {}

  ngOnInit() {}

  createForm(s: Survey) {
    console.log(s);
    this._data = s;
    s.questions.forEach((q) => {
      const validator = q.required ? [Validators.required] : [];

      switch (q.type) {
        case TYPE.TEXT:
        case TYPE.RADIO: {
          this.fg.addControl(q.name, new FormControl(q.value, validator));
          break;
        }

        case TYPE.CHECKBOX: {
          let value = q.value || '';
          this.fg.addControl(
            q.name,
            new FormArray(
              q.options.map((x) => new FormControl(value.includes(x.value))),
              validator
            )
          );
          break;
        }
      }
    });

    console.log(this.fg);
  }

  setActive(index: number) {
    if (this.active < this._data.questions.length) {
      console.log(this.active);
      const activeControl =
        this.fg.controls[this._data.questions[this.active].name];
      activeControl.markAsTouched();
    }

    this.active = index;
  }

  onSubmit() {
    console.log(this.fg);
  }
}
