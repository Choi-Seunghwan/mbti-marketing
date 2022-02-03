export type answerType = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';

export type answer = {
  text: string;
  type: answerType;
};

export type answers = answer[];

export type question = {
  id: number;
  question: string;
  answers: answers;
};

export type questions = question[];

export type champ = {
  name: string;
  code: string;
};

export type mbtiType = {
  id: number;
  type: string;
  nickname: string;
  mainDesc: string;
  desc: string[];
  champs: champ[];
};
