import * as S from '@components/MainContent/MainContent.style';
import { IMG_SIZE } from '@components/MainContent/constants';
import { MainContentDataType } from '@data';

interface MainSectionType {
  data: MainContentDataType;
}

const MainSection = ({ data }: MainSectionType) => {
  const getContentSection = () => {
    switch (data.type) {
      case 'city':
        return data.content.map(({ id, image, name, description }) => (
          <S.SectionItem key={id} size={IMG_SIZE.SMALL}>
            <S.ImgWrapper src={image} />
            <div>
              <S.Name>{name}</S.Name>
              <S.Description>{description}</S.Description>
            </div>
          </S.SectionItem>
        ));
      case 'trip':
        return data.content.map(({ id, image, name }) => (
          <S.SectionItem key={id} size={IMG_SIZE.LARGE}>
            <S.ImgWrapper src={image} />
            <S.Description>{name}</S.Description>
          </S.SectionItem>
        ));
    }
  };
  return (
    <S.Section>
      <S.SectionTitle>{data.title}</S.SectionTitle>
      <S.SectionContent>{getContentSection()}</S.SectionContent>
    </S.Section>
  );
};

export default MainSection;
