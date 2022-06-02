const PERSONNEL_TEXT = {
  ADULT: {
    title: '성인',
    explanation: '만 13세 이상',
  },
  CHILD: {
    title: '어린이',
    explanation: '만 2~12세',
  },
  INFANT: {
    title: '유아',
    explanation: '만 2세 미만',
  },
};

const PERSONNEL_STATE_KEY = {
  ADULT: '성인',
  CHILD: '어린이',
  INFANT: '유아',
};

const PERSONNEL_MIN = 0;
const PERSONNEL_MAX = 8;

export { PERSONNEL_TEXT, PERSONNEL_STATE_KEY, PERSONNEL_MIN, PERSONNEL_MAX };
