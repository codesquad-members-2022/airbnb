import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import * as S from './GNBstyle';

export function AccountMenu() {
  return (
    <S.AccountMenuWrapper>
      <MenuRoundedIcon color="Grey2" sx={{ fontSize: 24 }} />
      <AccountCircleIcon color="Grey3" sx={{ fontSize: 32 }} />
    </S.AccountMenuWrapper>
  );
}
