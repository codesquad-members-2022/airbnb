import React, { useReducer, useContext, useEffect } from 'react';

import MinusIcon from 'components/Icons/MinusIcon';
import PlusIcon from 'components/Icons/PlusIcon';
import { Context } from 'components/context/ModalContext';
import { GuestContext } from 'components/context/GuestModalContext';
import * as Styled from 'components/header/searchBar/guestModal/guestInfo/guestInfo.style';

interface GuestProps {
  type: string;
  description: string;
}

const increaseCount = (state) => {
  const { guestCount } = state;
  if (guestCount < 7) {
    return { ...state, guestCount: guestCount + 1, minusBtnColor: '#828282' };
  }
  if (guestCount === 7) {
    return { ...state, plusBtnColor: '#E0E0E0', guestCount: guestCount + 1 };
  }
  return state;
};

const decreaseCount = (state: any) => {
  const { guestCount, minusBtnColor, defaultCount } = state;
  if (minusBtnColor === '#E0E0E0') return state;
  if (guestCount > defaultCount + 1) {
    return { ...state, guestCount: guestCount - 1, plusBtnColor: '#828282' };
  }
  if (guestCount === defaultCount + 1) {
    return { ...state, guestCount: guestCount - 1, minusBtnColor: '#E0E0E0' };
  }
  return state;
};

function countReducer(state: any, action: any) {
  const actionFunc = {
    INCREMENT: increaseCount,
    DECREMENT: decreaseCount,
  };

  return actionFunc[action.type](state) || state;
}

const isActivated = (color: string) => {
  return color === '#828282';
};

function GuestInfo({ type, description }: GuestProps) {
  const { adultCount, childrenCount, infantCount } = useContext(GuestContext);
  const { setAdultCount, setChildrenCount, setInfantCount } = useContext(GuestContext);

  // eslint-disable-next-line no-nested-ternary
  const count = type === '성인' ? adultCount : type === '어린이' ? childrenCount : infantCount;

  const initialState = {
    defaultCount: count,
    guestCount: count,
    minusBtnColor: '#E0E0E0',
    plusBtnColor: '#828282',
  };

  const [state, dispatch] = useReducer(countReducer, initialState);
  const { guestCount, minusBtnColor, plusBtnColor } = state;
  const { setGuestCounts, setInfantCounts } = useContext(Context);

  const handleOnClick = (dispatchType: string, btnColor: string) => () => {
    const count = dispatchType === 'INCREMENT' ? 1 : -1;

    dispatch({ type: dispatchType });

    if (!setInfantCounts || !setGuestCounts) {
      return;
    }

    if (isActivated(btnColor)) {
      if (type === '유아') {
        setInfantCounts((prev: number) => prev + count);
      } else {
        setGuestCounts((prev: number) => prev + count);
      }
    }
  };

  useEffect(() => {
    if (!setAdultCount || !setChildrenCount || !setInfantCount) {
      return;
    }

    if (type === '성인') {
      setAdultCount(guestCount);
    } else if (type === '어린이') {
      setChildrenCount(guestCount);
    } else {
      setInfantCount(guestCount);
    }
  }, [guestCount]);

  return (
    <Styled.GuestInfoWrapper>
      <Styled.GuestType>
        <Styled.TypeTitle>{type}</Styled.TypeTitle>
        <Styled.Description>{description}</Styled.Description>
      </Styled.GuestType>
      <Styled.GuestCount>
        <Styled.MinusIconWrapper onClick={handleOnClick('DECREMENT', minusBtnColor)}>
          <MinusIcon color={minusBtnColor} />
        </Styled.MinusIconWrapper>
        <Styled.Count>{guestCount}</Styled.Count>
        <Styled.PlusIconWrapper onClick={handleOnClick('INCREMENT', plusBtnColor)}>
          <PlusIcon color={plusBtnColor} />
        </Styled.PlusIconWrapper>
      </Styled.GuestCount>
    </Styled.GuestInfoWrapper>
  );
}

export default GuestInfo;
