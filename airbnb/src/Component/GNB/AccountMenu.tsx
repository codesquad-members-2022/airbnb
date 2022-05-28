import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import * as S from './GNBstyle';

// TODO: Mui Theme 타입 확장을 통하여 TSX 에서 사용가능하게 수정 필요
export function AccountMenu() {
  return (
    <S.AccountMenuWrapper>
      <MenuRoundedIcon color="Grey2" sx={{ fontSize: 24 }} />
      <AccountCircleIcon color="Grey3" sx={{ fontSize: 32 }} />
    </S.AccountMenuWrapper>
  );
}
