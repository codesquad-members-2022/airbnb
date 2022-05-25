import * as S from '@components/Header/Header.style';
import Icon, { ICON_NAME, ICON_SIZE } from '@components/common/Icon';

const MyPageButton = () => {
  return (
    <S.MyPageButton>
      <Icon iconName={ICON_NAME.MENU} iconSize={ICON_SIZE.MEDIUM} />
      <S.UserIcon>
        <Icon iconName={ICON_NAME.USER} iconSize={ICON_SIZE.MEDIUM} />
      </S.UserIcon>
    </S.MyPageButton>
  );
};

export default MyPageButton;
