import ButtonGroup from '@mui/material/ButtonGroup';
import * as S from './GNBstyle';

// TODO: 버튼 반복 리팩토링
export function Menus() {
  return (
    <ButtonGroup>
      <S.MenuButton variant="text" color="Grey1">
        숙소
      </S.MenuButton>
      <S.MenuButton variant="text" color="Grey1">
        체험
      </S.MenuButton>
      <S.MenuButton variant="text" color="Grey1">
        온라인체험
      </S.MenuButton>
    </ButtonGroup>
  );
}
