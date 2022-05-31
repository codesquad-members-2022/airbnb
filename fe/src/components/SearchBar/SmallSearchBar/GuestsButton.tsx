import React from 'react';

import { IGuestsButton as Props, guestsToString } from '../common';
import { InfoButton } from './Button';

function GuestsButton({ adults = 0, children = 0, infants = 0 }: Props) {
  let description: string | string[] = '인원 입력';

  if (adults > 0) {
    description = guestsToString({ adults, children, infants });
  }

  return <InfoButton description={description} sep=", " />;
}

export default GuestsButton;
