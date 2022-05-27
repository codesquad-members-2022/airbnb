import * as S from '@components/GNB/GNB.style';
import Logo from '@components/GNB/Logo';
import MyPageButton from '@components/GNB/MyPageButton';
import Navigation from '@components/GNB/Navigation';

export const GNB_TYPE: { [key: string]: string } = {
  MAIN: 'Main',
  DETAIL: 'Detail',
};

export type GNBTypes = {
  gnbType: string;
};

const GNB = ({ gnbType }: GNBTypes) => {
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

export default GNB;
