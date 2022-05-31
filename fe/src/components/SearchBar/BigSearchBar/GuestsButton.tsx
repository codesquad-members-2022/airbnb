import React from 'react';

import { IGuestsButton as Props, guestsToString } from '../common';
import { InfoButton, ResetButton } from './Button';
import * as S from './style';

function GuestsButton({ adults = 0, child = 0, infants = 0 }: Props) {
  let description: string | string[] = '게스트 추가';

  if (adults > 0) {
    description = guestsToString({ adults, child, infants });
  }

  return (
    <S.ButtonWrapper>
      <InfoButton width={110} header="인원" description={description} sep=", " accent={!!adults} />
      <ResetButton />
    </S.ButtonWrapper>
  );
}

export default GuestsButton;
