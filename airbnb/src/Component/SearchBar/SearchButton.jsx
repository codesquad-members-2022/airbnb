import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import * as S from './SearchBarStyle';

export function SearchButton() {
  const [isSearch, setIsSearch] = useState(false);
  return (
    <Button
      variant="contained"
      color="Primary"
      sx={{
        // padding: isSearch ? '13px' : '0px',
        display: 'flex',
        justifyContent: isSearch ? 'flex-start' : 'center',
        borderRadius: 999,
        width: isSearch ? 90 : 40,
        height: 40,
        minWidth: 0,
      }}
      onClick={() => {
        setIsSearch(!isSearch);
      }}
    >
      <SearchIcon
        color="White"
        xs={{ marginLeft: '11px', marginRight: '13px' }}
      />
      {isSearch && <S.SearchFonts>검색</S.SearchFonts>}
    </Button>
  );
}
