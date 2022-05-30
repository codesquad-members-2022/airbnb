import * as S from '@components/Footer/Footer.style';
import { FooterContentTypes } from '@data';

interface ContentTypes {
  data: FooterContentTypes;
}

const Content = ({ data }: ContentTypes) => {
  return (
    <S.ServieWrapper>
      <S.ServiceTitle>{data.title}</S.ServiceTitle>
      {data.subtitle.map((subtitle, i) => (
        <S.ServiceContent key={i}>{subtitle}</S.ServiceContent>
      ))}
    </S.ServieWrapper>
  );
};

export default Content;
