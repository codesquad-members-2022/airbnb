import CompanyInfo from '@components/Footer/CompanyInfo';
import * as S from '@components/Footer/Footer.style';
import FooterContent from '@components/Footer/FooterContent';

const Footer = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <FooterContent />
        <CompanyInfo />
      </S.Wrapper>
    </S.Container>
  );
};

export default Footer;
