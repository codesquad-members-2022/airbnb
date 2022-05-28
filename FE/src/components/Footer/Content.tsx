import * as S from '@components/Footer/Footer.style';
import { FooterContentType } from '@components/Footer/constants';

type ContentTypes = {
  data: FooterContentType;
};

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
