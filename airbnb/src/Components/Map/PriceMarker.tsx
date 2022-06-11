import * as S from './Map.Style';

interface PriceMarkerProps {
  price: number;
}

export function PriceMarker({ price }: PriceMarkerProps) {
  return (
    <S.PriceMarkerWrapper>{`￦${price.toLocaleString()}`}</S.PriceMarkerWrapper>
  );
}
