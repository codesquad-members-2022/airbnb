export type TripTypes = {
  id: number;
  title: string;
  image: string;
};

export const tripData: TripTypes[] = [
  {
    id: 1,
    title: '자연생활을 만끽할 수 있는 숙소',
    image: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/84000/84621-Paris.jpg',
  },
  {
    id: 2,
    title: '독특한 공간',
    image: 'https://img.static-af.com/images/media/26743379-B7FE-440F-8E524E30B13E20D3/',
  },
  {
    id: 3,
    title: '집 전체',
    image: 'https://media.timeout.com/images/105237855/image.jpg',
  },
  {
    id: 4,
    title: '반려동물 동반가능',
    image: 'https://www.state.gov/wp-content/uploads/2018/11/Italy-2109x1406.jpg',
  },
];
