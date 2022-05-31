import React from 'react';

import { SearchButton } from '@/components/buttons/SearchButton';
import * as I from '@/styles/icons';

import { InfoButton, ResetButton } from './Button';
import * as S from './style';

function BigSearchBar() {
  return (
    <S.SearchBarLayer>
      <S.ButtonWrapper>
        <InfoButton header="체크인" description="5월 30일" />
        <InfoButton header="체크아웃" description="5월 30일" />
        <ResetButton />
      </S.ButtonWrapper>

      <S.Separator />

      <S.ButtonWrapper>
        <InfoButton
          width={200}
          header="요금"
          description={['$100,000', '$1,000,000']}
          descriptionSeparator=" ~ "
        />
        <ResetButton />
      </S.ButtonWrapper>

      <S.Separator />

      <S.ButtonWrapper>
        <InfoButton
          width={110}
          header="인원"
          description={['게스트 3명', '유아 2명']}
          descriptionSeparator=", "
        />
        <ResetButton />
      </S.ButtonWrapper>

      <S.SearchButtonLayer>
        <SearchButton>검색</SearchButton>
      </S.SearchButtonLayer>
    </S.SearchBarLayer>
  );
}

export default BigSearchBar;
