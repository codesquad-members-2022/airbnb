import * as S from '@components/Header/Header.style';
import Logo from '@components/Header/Logo';
import MyPageButton from '@components/Header/MyPageButton';
import Navigation from '@components/Header/Navigation';

export const HEADER_TYPE: { [key: string]: string } = {
  MAIN: 'Main',
  DETAIL: 'Detail',
};

export type HeaderTypes = {
  headerType: string;
};

const Header = ({ headerType }: HeaderTypes) => {
  return (
    <S.Container>
      <S.Wrapper>
        <Logo />
        <Navigation />
        <MyPageButton />
      </S.Wrapper>
    </S.Container>
  );
};

export default Header;
