import * as S from '@components/MainContent/MainContent.style';
import MainSection from '@components/MainContent/MainSection';
import { mainContentData, MainContentDataType } from '@data';

const MainContent = () => {
  return (
    <S.Container>
      <S.Wrapper>
        {mainContentData.map((data: MainContentDataType) => (
          <MainSection key={data.id} data={data} />
        ))}
      </S.Wrapper>
    </S.Container>
  );
};

export default MainContent;
