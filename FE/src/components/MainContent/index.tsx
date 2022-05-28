import CitySection from '@components/MainContent/CitySection';
import * as S from '@components/MainContent/MainContent.style';
import TripSection from '@components/MainContent/TripSection';

const MainContent = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <CitySection />
        <TripSection />
      </S.Wrapper>
    </S.Container>
  );
};

export default MainContent;
