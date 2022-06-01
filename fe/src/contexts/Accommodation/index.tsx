import React, { createContext, useContext, useReducer } from 'react';

interface AccommodationInfo {
  price: number;
  count: number;
}

interface Point {
  x: number;
  y: number;
}

interface AccommodationState {
  scaleFactor: number;
  accommodationData: AccommodationInfo[];
  averageNightlyPrice: number;
  offset: number;
  maxCount: number;
  chartData: Point[];
}

type AccommodationAction =
  | { type: 'PARSE'; payload: { fetchData: AccommodationInfo[] | null } }
  | { type: 'RESET' };
type AccommodationDispatch = React.Dispatch<AccommodationAction>;

const initialState: AccommodationState = {
  scaleFactor: 1_000,
  accommodationData: [],
  averageNightlyPrice: 0,
  offset: 0,
  maxCount: 0,
  chartData: [],
};

const AccommodationStateContext = createContext<AccommodationState | null>(null);
const AccommodationDispatchContext = createContext<AccommodationDispatch | null>(null);

const accommodationReducer = (state: AccommodationState, action: AccommodationAction) => {
  switch (action.type) {
    case 'PARSE': {
      const { fetchData } = action.payload;
      const { scaleFactor } = state;
      if (!fetchData?.length) {
        return state;
      }

      // NOTE: 정렬이 되어있지 정렬을 수행한다.
      // fetchData.sort(({ price: price1 }, { price: price2 }) => {
      //   return price1 - price2;
      // });

      const { price: minPrice } = fetchData[0];
      const { length } = fetchData;
      const offset = minPrice * scaleFactor;

      let maxCount = 0;
      const sumOfPrices = fetchData.reduce((acc, { price, count }) => {
        if (maxCount < count) {
          maxCount = count;
        }
        return acc + price;
      }, 0);

      const averageNightlyPrice = Math.round(sumOfPrices / length);
      const chartData = fetchData.map(({ count, price }) => {
        return {
          x: price * scaleFactor - offset,
          y: maxCount - count,
        };
      });

      return {
        ...state,
        accommodationData: fetchData,
        averageNightlyPrice,
        offset,
        maxCount,
        chartData,
      };
    }

    case 'RESET': {
      return initialState;
    }

    default: {
      return state;
    }
  }
};

export function AccommodationProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(accommodationReducer, initialState);

  return (
    <AccommodationDispatchContext.Provider value={dispatch}>
      <AccommodationStateContext.Provider value={state}>
        {children}
      </AccommodationStateContext.Provider>
    </AccommodationDispatchContext.Provider>
  );
}

/* action creator */
export const parseAction = (
  fetchData: AccommodationInfo[],
): { type: string; payload: { fetchData: AccommodationInfo[] } } => ({
  type: 'PARSE',
  payload: { fetchData },
});

export const resetAction = (): { type: string } => ({
  type: 'RESET',
});

/* hooks */
export const useAccommodation = () => {
  const state = useContext(AccommodationStateContext);

  if (state === null) {
    throw Error('Accommodation dispatch Error');
  }

  return state;
};

export const useAccommodationDispatch = () => {
  const dispatch = useContext(AccommodationDispatchContext);

  if (dispatch === null) {
    throw Error('Accommodation dispatch Error');
  }

  return dispatch;
};
