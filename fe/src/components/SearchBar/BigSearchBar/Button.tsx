import React from 'react';

import * as I from '@/styles/icons';

import * as S from './style';

interface InfoButtonProps {
  width?: number;
  header: string;
  description: string | string[];
  descriptionSeparator?: string;
}

export function InfoButton({
  width = 130,
  header,
  description,
  descriptionSeparator = ' ',
}: InfoButtonProps) {
  return (
    <S.Button width={width}>
      <S.Header>{header}</S.Header>
      <S.Description>
        {Array.isArray(description) ? description.join(descriptionSeparator) : description}
      </S.Description>
    </S.Button>
  );
}

interface ResetButtonProps {
  onClick?: ((event?: React.MouseEvent) => void) | undefined;
}

export function ResetButton({ onClick }: ResetButtonProps) {
  return (
    <S.ResetButton onClick={onClick}>
      <I.Reset />
    </S.ResetButton>
  );
}
