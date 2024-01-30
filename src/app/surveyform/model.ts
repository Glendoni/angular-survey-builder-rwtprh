export enum TYPE {
  TEXT = 'text',
  EMAIL = 'email',
  DATE = 'date',
  SELECT = 'select',
  PASSWORD = 'password',
  NUMBER = 'number',
  RADIO = 'radio',
  CHECKBOX = 'checkbox'
}

export interface Survey {
  label: string;
  questions: Question[];
  style?: {
    background: string;
    color: string;
  };
}

interface Question {
  name: string;
  label: string;
  type: TYPE;
  required: boolean;
  value?: any;
  options?: { // for select or multiple choice type
    value: any,
    label: string,
    icon?: string
  }[];
}