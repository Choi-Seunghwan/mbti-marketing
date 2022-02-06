import stringJson from '@/data/string.json';
import lolQuestions from '@/data/lol-questions.json';
import lolMbti from '@/data/lol-mbti.json';
import { mbtiType } from '@/types';
import moment from 'moment';

export const goMarketingLink = () => {
  const url = String(import.meta.env.VITE_LINK_MARKETING);
  console.log('@@@', url);
  window.open(url, '_blank');
};

export const goLink = url => {
  window.open(url, '_blank');
};

export const formatDatetime = datetime => {
  const date = moment(Number(datetime)).format('YYYY/MM/DD HH:mm');
  return date;
};

export const parseStr = (key: string) => {
  return stringJson[key] || String(key);
};

export const getLolQuestions = () => {
  return lolQuestions;
};

export const getChampImgSrc = champCode => {
  return `/img/champ${champCode}.jpeg`;
};

export const getSubChampImgSrc = champCode => {
  return `/img/champ-sub/${champCode}.png`;
};

export const getAllTypes = (): mbtiType[] => {
  const types: mbtiType[] = lolMbti;
  return types;
};

export const getTypeInfo = (type: string): mbtiType => {
  const types: mbtiType[] = lolMbti;
  const typeIdx = types?.findIndex(t => t?.type === type);
  return types[typeIdx];
};

export const calculateAnswer = (answers, questions) => {
  if (answers?.length !== questions?.length) {
    console.error('Error, calculateAnswer');
    return;
  }

  const scoreList = [0, 0, 0, 0];
  let resultStr = '';
  /**
   * @description
   * scoreList : [EI, SN, TF, JP]
   * answer의 type에 따라 scoreList의 0~3 Index의 값이 매겨지며,
   * 예를 들어,
   * type: 'E' 일 경우, 0번째 -1.
   * type: 'I' 일 경우, 0번재 +1.
   * type: 'S' 일 경우, 1번째 -1.
   * type: 'N' 일 경우, 1번째 +1.
   * scoreList 의 값은 0이어선 안됨. 0 미만이거나, 0 초과이어야만 함.
   * answers를 한번만 탐색 함.
   */

  answers?.forEach((answer, idx) => {
    const { type } = answer;
    switch (type) {
      case 'E':
        scoreList[0] -= 1;
        break;
      case 'I':
        scoreList[0] += 1;
        break;
      case 'S':
        scoreList[1] -= 1;
        break;
      case 'N':
        scoreList[1] += 1;
        break;
      case 'T':
        scoreList[2] -= 1;
        break;
      case 'F':
        scoreList[2] += 1;
        break;
      case 'J':
        scoreList[3] -= 1;
        break;
      case 'P':
        scoreList[3] += 1;
        break;
      default:
      // return;
    }
  });

  resultStr += scoreList[0] < 0 ? 'E' : 'I';
  resultStr += scoreList[1] < 0 ? 'S' : 'N';
  resultStr += scoreList[2] < 0 ? 'T' : 'F';
  resultStr += scoreList[3] < 0 ? 'J' : 'P';
  return resultStr;
};
