import stringJson from '@/data/string.json';
import lolQuestions from '@/data/lol-questions.json';

export const parseStr = key => {
  return stringJson[key] || String(key);
};

export const getLolQuestions = () => {
  return lolQuestions;
};
