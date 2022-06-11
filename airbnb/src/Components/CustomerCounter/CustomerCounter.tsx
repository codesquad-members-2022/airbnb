import {
  SearchingDispatchContext,
  SearchingContext,
} from '@/Contexts/Searching';
import { useNullGuard } from '@/Hooks/useNullguard';
import { Counter } from './Counter';
import { CounterLabel } from './CounterLabel';
import * as S from './CustomerCounter.style';

export function CustomerCounter() {
  const { customersDispatch } = useNullGuard(SearchingDispatchContext);
  const {
    customers: { adultCount, childrenCount, infantsCount },
  } = useNullGuard(SearchingContext);

  return (
    <div>
      <S.CounterContainer>
        <CounterLabel title="성인" caption="10013세 이상" />
        <Counter
          countNumber={adultCount}
          isDecreaseDisable={
            !adultCount ||
            (adultCount === 1 && (!!childrenCount || !!infantsCount))
          }
          isIncreaseDisable={adultCount + childrenCount === 16}
          countDispatch={newCountNumber => {
            customersDispatch({
              type: 'SET_ADULT_COUNT',
              income: newCountNumber,
            });
          }}
        />
      </S.CounterContainer>
      <S.CounterContainer>
        <CounterLabel title="어린이" caption="만 2~12세" />
        <Counter
          countNumber={childrenCount}
          isDecreaseDisable={!childrenCount}
          isIncreaseDisable={adultCount + childrenCount === 16}
          countDispatch={newCountNumber => {
            customersDispatch({
              type: 'SET_CHILDREN_COUNT',
              income: newCountNumber,
            });
          }}
        />
      </S.CounterContainer>
      <S.CounterContainer>
        <CounterLabel title="유아" caption="만 2세 미만" />
        <Counter
          countNumber={infantsCount}
          isDecreaseDisable={!infantsCount}
          isIncreaseDisable={infantsCount === 5}
          countDispatch={newCountNumber => {
            customersDispatch({
              type: 'SET_INFANTS_COUNT',
              income: newCountNumber,
            });
          }}
        />
      </S.CounterContainer>
    </div>
  );
}
