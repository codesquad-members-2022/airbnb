import * as S from '@components/MainContent/MainContent.style';
import { IMG_SIZE } from '@components/MainContent/constants';
import { tripData, TripTypes } from '@data';

const TripSection = () => {
  return (
    <S.Section>
      <S.SectionTitle>어디서나, 여행은 살아보는 거야!</S.SectionTitle>
      <S.SectionContent>
        {tripData.map(({ id, title, image }: TripTypes) => (
          <S.SectionItem key={id} size={IMG_SIZE.LARGE}>
            <S.ImgWrapper src={image} />
            <S.Description>{title}</S.Description>
          </S.SectionItem>
        ))}
      </S.SectionContent>
    </S.Section>
  );
};

export default TripSection;
