import * as S from './CustomerCounter.style';

interface CounterLabelProps {
  title: string;
  caption: string;
}

export function CounterLabel({ title, caption }: CounterLabelProps) {
  return (
    <div>
      <S.CounterTitle>{title}</S.CounterTitle>
      <S.CounterCaption>{caption}</S.CounterCaption>
    </div>
  );
}
