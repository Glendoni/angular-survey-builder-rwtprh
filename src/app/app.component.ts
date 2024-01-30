import { Component } from '@angular/core';
import { Survey, TYPE } from './surveyform/model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data: Survey = {
    label: 'Form number 1',
    questions: [
      {
        name:'question1text',
        label: 'Question number 1',
        type: TYPE.TEXT,
        required: true
      },
      {
        name:'question2text',
        label: 'Question number 2',
        type: TYPE.TEXT,
        required: false,
        value: 'default value'
      },
      {
        name:'question3radio',
        label: 'Question number 3',
        type: TYPE.RADIO,
        required: false,
        options: [
          {
            value: 0,
            label: 'label0',
            icon: 'https://media.giphy.com/media/57Ya45Injj6OghiVix/giphy.gif'
          },
          {
            value: 1,
            label: 'label1',
            icon: 'https://media.giphy.com/media/3oEjHUajTSwjbkCDRu/giphy.gif'
          },
          {
            value: 2,
            label: 'label2',
            icon: 'https://media2.giphy.com/media/EbaEWv3icphQI/giphy.gif?cid=3640f6095c376d806173735577521b13'
          }
        ]
      },
      {
        name:'question4radio',
        label: 'question number 4',
        type: TYPE.RADIO,
        required: true,
        options: [
          {
            value: 0,
            label: 'label0'
          },
          {
            value: 1,
            label: 'label1'
          },
          {
            value: 2,
            label: 'label2'
          }
        ]
      },
      {
        name:'question5checkbox',
        label: 'question number 5',
        type: TYPE.CHECKBOX,
        required: true,
        options: [
          {
            value: 0,
            label: 'label0',
            icon: 'https://media.giphy.com/media/3oEjHUajTSwjbkCDRu/giphy.gif'
          },
          {
            value: 1,
            label: 'label1'
          },
          {
            value: 2,
            label: 'label2'
          }
        ]
      }
    ]
  }
}
