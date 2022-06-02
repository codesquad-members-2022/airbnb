export interface FooterContentTypes {
  id: number;
  title: string;
  subtitle: string[];
}

export const footerContent = [
  {
    id: 1,
    title: '소개',
    subtitle: [
      '이용방법',
      '뉴스룸',
      '투자자정보',
      '호텔투나잇',
      '비즈니스 프로그램',
      '호스트 분들이 있기에 가능합니다.',
      '채용정보',
      '창립자 편지',
    ],
  },
  {
    id: 2,
    title: '커뮤니티',
    subtitle: [
      '커뮤니티',
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
    subtitle: [
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
    subtitle: [
      '코로나19 대응 방안',
      '도움말 센터',
      '예약 취소 옵션',
      '이웃 민원 지원',
      '신뢰와 안전',
    ],
  },
];

export interface CompanyInfoTypes {
  id: number;
  title: string;
}

export const companyInfo = [
  {
    id: 1,
    title: '© 2022 Logo, Inc',
  },
  {
    id: 2,
    title: '개인정보처리방침',
  },
  {
    id: 3,
    title: '이용약관',
  },
  {
    id: 4,
    title: '이용약관',
  },
  {
    id: 5,
    title: '한국의 변경된 환불정책',
  },
  {
    id: 6,
    title: '회사 세부 정보',
  },
];
