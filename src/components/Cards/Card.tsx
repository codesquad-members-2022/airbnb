import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import styled from 'styled-components';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ReservationModal from '@components/ReservationModal/ReservationModal';
import CardText from './CardsTexts';
import { SkeletonAnimation } from '../../UI/Skeleton';

export type CardDataType = {
  lng: number;
  lat: number;
  roomId: number;
  name: string;
  address: string;
  imgSrc: string;
  maxPersonnel: number;
  price: number;
  cleaningCostRatio: number;
  serviceCostRation: number;
  taxRation: number;
  alreadyReserver: [
    {
      [key: string]: number;
    },
  ];
};

const Card = ({ accommInfo }: { accommInfo: CardDataType }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isReservationModalOpened, setIsReservationModalOpened] =
    useState<boolean>(false);

  const imgRef = useRef<HTMLImageElement>(null);
  const observer = useRef<IntersectionObserver>();

  useLayoutEffect(() => {
    observer.current = new IntersectionObserver(intersectionObserver);
    observer.current.observe(imgRef.current);
  }, []);

  const intersectionObserver = (
    entries: IntersectionObserverEntry[],
    io: IntersectionObserver,
  ) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        io.unobserve(entry.target);
        setIsVisible(true);
      }
    });
  };

  const closeModal = (e: React.MouseEvent<SVGSVGElement>) => {
    e.stopPropagation();
    setIsReservationModalOpened(false);
  };

  return (
    <CardContainer id={accommInfo.roomId} onClick={() => setIsReservationModalOpened(true)}>
      <CardImage src={isVisible ? accommInfo.imgSrc : undefined} alt='hotels' ref={imgRef} />
      <CardText price={accommInfo.price} name={accommInfo.name} />
      <HeartIcon />
      {isReservationModalOpened && (
        <ReservationModal accommInfo={accommInfo} closeModal={closeModal} />
      )}
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div<{ id: number }>`
  position: relative;
  ${({ theme }) => theme.mixin.flexMixin('row', 'center', 'center')}
  padding: 20px 0;
  width: 100%;
  height: 30%;
  box-sizing: border-box;
  border-bottom: 1px solid #e0e0e0;
`;

const CardImage = styled.img`
  width: 330px;
  height: 200px;
  border-radius: 10px;
  margin-right: 10px;
  ${SkeletonAnimation}
`;

const HeartIcon = styled(FavoriteBorderIcon)`
  position: absolute;
  top: 30px;
  right: 10px;
`;
