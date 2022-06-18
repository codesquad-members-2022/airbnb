enum Language {
  KOR = 'kr',
  ENG = 'eng',
  JP = 'jp',
}

type LangDataType = {
  [lang in Language]: string[];
};

enum Week {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

const weekData: LangDataType = {
  [Language.KOR]: ['일', '월', '화', '수', '목', '금', '토'],
  [Language.ENG]: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  [Language.JP]: ['月', '火', '水', '木', '金', '土', '日'],
};

type DateUnitType = {
  [lang in Language]: {
    year: string;
    month: string;
  };
};

const DATE_UNIT: DateUnitType = {
  [Language.KOR]: {
    year: '년도',
    month: '월',
  },
  [Language.ENG]: {
    year: '',
    month: '',
  },
  [Language.JP]: {
    year: '年',
    month: '月',
  },
};

export { Language, Week, weekData, DATE_UNIT };
