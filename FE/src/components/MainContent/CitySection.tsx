import * as S from '@components/MainContent/MainContent.style';
import { IMG_SIZE } from '@components/MainContent/constants';
import { cityData, CityTypes } from '@data';

const CitySection = () => {
  return (
    <S.Section>
      <S.SectionTitle>가까운 여행지 둘러보기</S.SectionTitle>
      <S.SectionContent>
        {cityData.map(({ id, name, description, image }: CityTypes) => (
          <S.SectionItem key={id} size={IMG_SIZE.SMALL}>
            <S.ImgWrapper src={image} />
            <div>
              <S.Name>{name}</S.Name>
              <S.Description>{description}</S.Description>
            </div>
          </S.SectionItem>
        ))}
      </S.SectionContent>
    </S.Section>
  );
};

export default CitySection;
