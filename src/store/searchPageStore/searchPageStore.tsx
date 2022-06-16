import { atom, selector } from 'recoil';

export const searchInfoState = atom({
  key: 'SearchInfoState',
  default: {
    checkIn: null,
    checkOut: null,
    minPrice: null,
    maxPrice: null,
    personnel: null,
    minLatitude: 37.474643190801984,
    minLongitude: 127.0177264600349,
    latitude: 37.507322742120685,
    longitude: 127.0494023698062,
  },
});

const cardsDataQuery = selector({
  key: 'CardsDataQuery',
  get: async () => {
    const response = await fetch(
      'https://test-234b2-default-rtdb.firebaseio.com/.json',
    );
    const cardsData = await response.json();
    return cardsData;
  },
});

// 원래 생각했던건 cards들을 구분하는 기준이 바뀌면
// cardsDataQuery를 실행해서 적절한 데이터만 뽑아내는 것이였는데,
// 백엔드가 없어 500여개의 데이터를 한번에 불러와야 하는 상황이라
// 아래 selector을 추가하면서 변경했습니다.

export const filteredCardsData = selector({
  key: 'FilteredCardsData',
  get: ({ get }) => {
    const fetchedCardsData = get(cardsDataQuery);
    const currentSearchInfo = get(searchInfoState);
    const initialCondition = {
      filteredData: fetchedCardsData,
      currentSearchInfo,
    };

    const { filteredData } = filteredBySearchInfo(
      filteredByPrice,
      filteredByCoords,
      filteredByPeopleNum,
    )(initialCondition);

    return filteredData;
  },
});

const filteredByCoords = ({ filteredData, currentSearchInfo }) => {
  const { minLatitude, latitude, minLongitude, longitude } = currentSearchInfo;
  const filteredDataByCoords = filteredData.filter(
    ({ lat, lng }) =>
      lat >= minLatitude &&
      lat <= latitude &&
      lng >= minLongitude &&
      lng <= longitude,
  );

  return { filteredData: filteredDataByCoords, currentSearchInfo };
};

const filteredByPrice = ({ filteredData, currentSearchInfo }) => {
  const { minPrice, maxPrice } = currentSearchInfo;
  const priceFilterCondition = {
    minPrice: minPrice || 0,
    maxPrice: maxPrice || 1_000_000,
  };
  const dataFilteredByPrice = filteredData.filter(
    ({ price }) =>
      price >= priceFilterCondition.minPrice &&
      price <= priceFilterCondition.maxPrice,
  );
  return { filteredData: dataFilteredByPrice, currentSearchInfo };
};

const filteredByPeopleNum = ({ filteredData, currentSearchInfo }) => {
  const { personnel } = currentSearchInfo;

  const dataFilteredByPeopleNum = filteredData.filter(
    ({ maxPersonnel }) => maxPersonnel >= personnel,
  );

  return { filteredData: dataFilteredByPeopleNum, currentSearchInfo };
};

const compose =
  (f, g) =>
  (...args) =>
    f(g(...args));

const filteredBySearchInfo = (...fns) => {
  return fns.reduce(compose);
};
