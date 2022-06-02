import { Bucheon, Daegu, Daejeon, Gwangju, Seoul, Suwon, Uijeongbu, Ulsan } from '@assets/images';

export interface MainContentDataType {
  id: number;
  type: string;
  title: string;
  content: {
    id: number;
    name: string;
    description?: string;
    image: string;
  }[];
}

export const mainContentData: MainContentDataType[] = [
  {
    id: 1,
    type: 'city',
    title: '가까운 여행지 둘러보기',
    content: [
      {
        id: 1,
        name: '서울',
        description: '차로 30분 거리',
        image: Seoul,
      },
      {
        id: 2,
        name: '의정부시',
        description: '차로 30분 거리',
        image: Uijeongbu,
      },
      {
        id: 3,
        name: '대구',
        description: '차로 3.5시간 거리',
        image: Daegu,
      },
      {
        id: 4,
        name: '대전',
        description: '차로 2시간 거리',
        image: Daejeon,
      },
      {
        id: 5,
        name: '광주',
        description: '차로 30분 거리',
        image: Gwangju,
      },
      {
        id: 6,
        name: '수원시',
        description: '차로 30분 거리',
        image: Suwon,
      },
      {
        id: 7,
        name: '울산',
        description: '차로 30분 거리',
        image: Ulsan,
      },
      {
        id: 8,
        name: '부천시',
        description: '차로 30분 거리',
        image: Bucheon,
      },
    ],
  },
  {
    id: 2,
    type: 'trip',
    title: '어디서나, 여행은 살아보는 거야!',
    content: [
      {
        id: 1,
        name: '자연생활을 만끽할 수 있는 숙소',
        image:
          'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/84000/84621-Paris.jpg',
      },
      {
        id: 2,
        name: '독특한 공간',
        image: 'https://img.static-af.com/images/media/26743379-B7FE-440F-8E524E30B13E20D3/',
      },
      {
        id: 3,
        name: '집 전체',
        image: 'https://media.timeout.com/images/105237855/image.jpg',
      },
      {
        id: 4,
        name: '반려동물 동반가능',
        image: 'https://www.state.gov/wp-content/uploads/2018/11/Italy-2109x1406.jpg',
      },
    ],
  },
];
