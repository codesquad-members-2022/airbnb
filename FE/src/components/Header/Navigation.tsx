import * as S from '@components/Header/Header.style';
import { nav, NavTypes } from '@constants';

const Navigation = () => {
  return (
    <S.Nav>
      {nav.map(({ id, title, path }: NavTypes) => (
        <S.NavItem key={id}>
          <S.NavItemLink to={path}>{title}</S.NavItemLink>
        </S.NavItem>
      ))}
    </S.Nav>
  );
};

export default Navigation;
