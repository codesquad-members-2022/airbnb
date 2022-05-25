import React from 'react';

import { SmallSearchButton } from '@/components/buttons/SearchButton';

import * as S from './style';

// TODO: props 추가
function SmallSearchBar() {
  return (
    <>
      <S.SearchBarLayer>
        <S.Button>날짜 입력</S.Button>

        <S.Separator />

        <S.Button>금액대 입력</S.Button>

        <S.Separator />

        <S.Button>인원 입력</S.Button>

        <S.SearchButtonLayer>
          <SmallSearchButton />
        </S.SearchButtonLayer>
      </S.SearchBarLayer>

      <S.SearchBarLayer>
        <S.Button>5월 17일 ~ 6월 4일</S.Button>

        <S.Separator />

        <S.Button>$100,000 ~ $1,000,000</S.Button>

        <S.Separator />

        <S.Button>게스트 3명</S.Button>

        <S.SearchButtonLayer>
          <SmallSearchButton />
        </S.SearchButtonLayer>
      </S.SearchBarLayer>
    </>
  );
}

export default SmallSearchBar;
