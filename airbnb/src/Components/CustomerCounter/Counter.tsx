import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import * as S from './CustomerCounter.style';

interface CounterProps {
  countNumber: number;
  isDecreaseDisable?: boolean;
  isIncreaseDisable?: boolean;
  countDispatch(newCountNumber: number): void;
}

export function Counter({
  countNumber,
  isDecreaseDisable = false,
  isIncreaseDisable = false,
  countDispatch,
}: CounterProps) {
  const decrease = () => {
    countDispatch(countNumber - 1);
  };
  const increase = () => {
    countDispatch(countNumber + 1);
  };
  return (
    <S.CounterWrapper>
      <S.CounterButton onClick={decrease} disabled={isDecreaseDisable}>
        <RemoveRoundedIcon />
      </S.CounterButton>
      <S.CountNumber>{countNumber}</S.CountNumber>
      <S.CounterButton onClick={increase} disabled={isIncreaseDisable}>
        <AddRoundedIcon />
      </S.CounterButton>
    </S.CounterWrapper>
  );
}
