import React from 'react';

import { SearchButton } from '@/components/buttons/SearchButton';
import * as I from '@/styles/icons';

import * as S from './style';

function BigSearchBar() {
  return (
    <S.SearchBarLayer>
      <S.ButtonWrapper>
        <S.Button>
          <S.Header>체크인</S.Header>
          <S.Description>5월 20일</S.Description>
        </S.Button>
        <S.Button>
          <S.Header>체크아웃</S.Header>
          <S.Description>5월 30일</S.Description>
        </S.Button>
        <S.ResetButton>
          <I.Reset />
        </S.ResetButton>
      </S.ButtonWrapper>

      <S.Separator />

      <S.ButtonWrapper>
        <S.Button>
          <S.Header>요금</S.Header>
          <S.Description>$100,000 ~ $1,000,000</S.Description>
        </S.Button>
        <S.ResetButton>
          <I.Reset />
        </S.ResetButton>
      </S.ButtonWrapper>

      <S.Separator />

      <S.ButtonWrapper>
        <S.Button>
          <S.Header>인원</S.Header>
          <S.Description>게스트 2명</S.Description>
        </S.Button>
        <S.ResetButton>
          <I.Reset />
        </S.ResetButton>
      </S.ButtonWrapper>

      <S.SearchButtonLayer>
        <SearchButton>검색</SearchButton>
      </S.SearchButtonLayer>
    </S.SearchBarLayer>
  );
}

export default BigSearchBar;
