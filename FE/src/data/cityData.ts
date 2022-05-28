import { Bucheon, Daegu, Daejeon, Gwangju, Seoul, Suwon, Uijeongbu, Ulsan } from '@assets/images';

export type CityTypes = {
  id: number;
  name: string;
  description: string;
  image: string;
}

export const cityData: CityTypes[] = [
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
];
