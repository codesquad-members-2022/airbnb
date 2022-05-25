import { Grid } from '@mui/material';
import { AccountMenu } from './AccountMenu';
import { Menus } from './Menus';
import * as S from './GNBstyle';

export function GNB() {
  return (
    <S.GNBwrapper>
      {/* TODO: Grid 반복요소 리팩토링 */}
      <Grid container justifyContent="space-between">
        <Grid item>
          <S.Logo href="./">logo</S.Logo>
        </Grid>
        <Grid item>
          <Menus />
        </Grid>
        <Grid item>
          <AccountMenu />
        </Grid>
      </Grid>
    </S.GNBwrapper>
  );
}
