export const boundsCoordParser = (Map: unknown) => {
  const { ha, qa, oa, pa } = Map.getBounds();
  const { La, Ma } = Map.getCenter();
  const newCurrentBounds = {
    minLatitude: qa,
    latitude: pa,
    minLongitude: ha,
    longitude: oa,
    centerLatitude: La,
    centerLongtitude: Ma,
  };
  return newCurrentBounds;
};

const KAKAO_API_KEY = process.env.REACT_APP_KAKAO_API;

export const kakaoUrl = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_API_KEY}`;

export const initialCoordState = {
  minLatitude: 37.44025954159828,
  minLongitude: 126.97649607139127,
  latitude: 37.50649849229814,
  longitude: 127.03655373306772,
};
