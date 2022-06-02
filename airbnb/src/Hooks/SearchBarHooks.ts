import React, { useContext } from 'react';

export const useNullGuard = <TargetType>(
  context: React.Context<TargetType | null>,
): TargetType => {
  const targetState = useContext(context);

  if (!targetState) {
    throw new Error('target State Error: 값이 없습니다.');
  }

  return targetState;
};
