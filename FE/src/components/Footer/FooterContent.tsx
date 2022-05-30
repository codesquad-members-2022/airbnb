import * as S from '@components/Footer/Footer.style';
import { footerContent, FooterContentTypes } from '@data';

const FooterContent = () => {
  return (
    <S.FooterContent>
      {footerContent.map(({ id, title, subtitle }: FooterContentTypes) => (
        <S.ServieWrapper key={id}>
          <S.ServiceTitle>{title}</S.ServiceTitle>
          {subtitle.map((subtitle) => (
            <S.ServiceContent key={subtitle}>{subtitle}</S.ServiceContent>
          ))}
        </S.ServieWrapper>
      ))}
    </S.FooterContent>
  );
};

export default FooterContent;
