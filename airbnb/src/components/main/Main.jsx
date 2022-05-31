import CityInfo from './CityInfo';
import TripInfo from './TripInfo';
import { cityData } from 'assets/data/cityData';
import { tripData } from 'assets/data/tripData';

const title = {
  cityTitle: '가까운 여행지 둘러보기',
  tripTitle: '어디서나, 여행은 살아보는 거야!',
};

function Main() {
  return (
    <main>
      <CityInfo title={title.cityTitle} data={cityData} />
      <TripInfo title={title.tripTitle} data={tripData} />
    </main>
  );
}

export default Main;
