export const GNBS = [
  { id: 1, text: '숙소' },
  { id: 2, text: '체험' },
  { id: 3, text: '온라인 체험' },
];

export const MENUS = [
  { id: 1, src: '/assets/images/menu.svg', alt: '메뉴' },
  { id: 2, src: '/assets/images/user.svg', alt: '유저정보' },
];

export const CHECK_INFOS = [
  { id: 1, title: '체크인', label: 'checkin', placeHolder: '날짜 입력' },
  { id: 2, title: '체크아웃', label: 'checkout', placeHolder: '날짜 입력' },
];

export const FARE_INFO = {
  title: '요금',
  label: 'fare',
  placeHolder: '금액대 설정',
};

export const PERSONNEL_TEXT = {
  title: '인원',
  label: 'personnel',
  placeHolder: '게스트 추가',
};

export const BASIC_MONTH_INFO = {
  thisMonth: 1,
  nextMonth: 2,
};

const CAROUSELUNIT_LEFT = 40.4;
const CAROUSELUNIT_RIGHT = -40.4;

export const CALENDAR_BUTTON_INFOS = [
  {
    id: 1,
    src: './assets/images/left.svg',
    alt: '캘린더 왼쪽 버튼',
    className: 'left',
    carouselUnit: CAROUSELUNIT_LEFT,
  },
  {
    id: 2,
    src: './assets/images/right.svg',
    alt: '캘린더 오른쪽 버튼',
    className: 'right',
    carouselUnit: CAROUSELUNIT_RIGHT,
  },
];

export const DAYS = ['일', '월', '화', '수', '목', '금', '토'];

export const TRAVEL_INFOS = [
  {
    id: 1,
    src: './assets/images/img.png',
    alt: '서울',
    destination: '서울',
    distance: '차로 30분 거리',
  },
  {
    id: 2,
    src: './assets/images/img-2.png',
    alt: '의정부시',
    destination: '의정부시',
    distance: '차로 30분 거리',
  },
  {
    id: 3,
    src: './assets/images/img-4.png',
    alt: '대구',
    destination: '대구',
    distance: '차로 3.5시간 거리',
  },
  {
    id: 4,
    src: './assets/images/img-6.png',
    alt: '대전',
    destination: '대전',
    distance: '차로 2시간 거리',
  },
  {
    id: 5,
    src: './assets/images/img-1.png',
    alt: '광주',
    destination: '광주',
    distance: '차로 4시간 거리',
  },
  {
    id: 6,
    src: './assets/images/img-3.png',
    alt: '수원시',
    destination: '수원시',
    distance: '차로 45분 거리',
  },
  {
    id: 7,
    src: './assets/images/img-5.png',
    alt: '울산',
    destination: '울산',
    distance: '차로 4.5시간 거리',
  },
  {
    id: 8,
    src: './assets/images/img-7.png',
    alt: '부천시',
    destination: '부천시',
    distance: '차로 45분 거리',
  },
];

export const ANYWHERE_INFOS = [
  {
    id: 1,
    src: './assets/images/Rectangle 2.png',
    alt: '자연생활을 만끽할 수 있는 숙소',
    title: '자연생활을 만끽할 수 있는 숙소',
  },
  {
    id: 2,
    src: './assets/images/Rectangle 2-1.png',
    alt: '독특한 공간',
    title: '독특한 공간',
  },
  {
    id: 3,
    src: './assets/images/Rectangle 2-2.png',
    alt: '집 전체',
    title: '집 전체',
  },
  {
    id: 4,
    src: './assets/images/Rectangle 2-3.png',
    alt: '반려동물 동반 가능',
    title: '반려동물 동반 가능',
  },
];

export const LNB_INFOS = [
  {
    id: 1,
    title: '소개',
    link: [
      '이용 방법',
      '뉴스룸',
      '투자자 정보',
      '호텔투나잇',
      '비즈니스 프로그램',
      '호스트 분들이 있기에 가능합니다',
      '채용정보',
      '창립자 편지',
    ],
  },
  {
    id: 2,
    title: '커뮤니티',
    link: [
      '다양성 및 소속감',
      '접근성',
      '어소시에이트',
      '구호 인력을 위한 숙소',
      '게스트 추천',
    ],
  },
  {
    id: 3,
    title: '호스팅하기',
    link: [
      '호스팅하기',
      '숙소 호스팅',
      '온라인 체험 호스팅하기',
      '체험 호스팅하기',
      '책임감 있는 호스팅',
      '호스트 추천',
      '자료 센터',
      '커뮤니티 센터',
    ],
  },
  {
    id: 4,
    title: '지원',
    link: [
      '코로나19 대응 방안',
      '도움말 센터',
      '예약 취소 옵션',
      '이웃 민원 지원',
      '신뢰와 안전',
    ],
  },
];

export const FNB_INFOS = [
  {
    id: 1,
    link: '© 2021 Logo, Inc.',
  },
  {
    id: 2,
    link: '개인정보처리방침',
  },
  {
    id: 3,
    link: '이용약관',
  },
  {
    id: 4,
    link: '한국의 변경된 환불 정책',
  },
  {
    id: 5,
    link: '회사 세부정보',
  },
];

export const PERSONNEL_INFOS = [
  { id: 1, title: '성인', age: '만 13세 이상', actionTypeName: 'ADULT' },
  { id: 2, title: '어린이', age: '만 2~12세', actionTypeName: 'CHILD' },
  { id: 3, title: '유아', age: '만 2세 미만', actionTypeName: 'INFANT' },
];

export const PERSONNEL_MAX_VALUE = 8;
export const PERSONNEL_MIN_VALUE = 0;
