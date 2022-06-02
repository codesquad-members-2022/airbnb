import * as S from '@components/MainContent/MainContent.style';
import { IMG_SIZE } from '@components/MainContent/constants';
import { MainContentDataType } from '@data';

interface MainSectionType {
  data: MainContentDataType;
}

const MainSection = ({ data }: MainSectionType) => {
  const getContentSection = () => {
    if (data.type === 'city') {
      return data.content.map((content) => (
        <S.SectionItem key={content.id} size={IMG_SIZE.SMALL}>
          <S.ImgWrapper src={content.image} />
          <div>
            <S.Name>{content.name}</S.Name>
            <S.Description>{content.description}</S.Description>
          </div>
        </S.SectionItem>
      ));
    } else {
      return data.content.map((content) => (
        <S.SectionItem key={content.id} size={IMG_SIZE.LARGE}>
          <S.ImgWrapper src={content.image} />
          <S.Description>{content.name}</S.Description>
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
