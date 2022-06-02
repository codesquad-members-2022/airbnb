/* eslint-disable react/jsx-no-constructed-context-values */
import CANVAS_SIZE from 'constants/canvasSize';
import PRIICE from 'constants/priceRange';
import { createContext, useReducer, useState } from 'react';
import guestReducer from 'reducer/guestReducer';
import modalReducer from 'reducer/modalReducer';
import priceReducer from 'reducer/priceReducer';
import scheduleReducer from 'reducer/scheduleReducer';

const FilterContext = createContext();

const INIT_STATE = {
  SCHEDULE: { checkIn: null, checkOut: null },
  ACTIVE_MODAL_NAME: 'NOTHING',
  GUEST: { adult: 0, child: 0, infant: 0 },
  PRICE: { low: PRIICE.MIN, high: PRIICE.MAX },
};

function FilterProvider({ children }) {
  const [schedule, scheduleDispatch] = useReducer(scheduleReducer, INIT_STATE.SCHEDULE);
  const [activeModalName, modalDispatch] = useReducer(modalReducer, INIT_STATE.ACTIVE_MODAL_NAME);
  const [guest, guestDispatch] = useReducer(guestReducer, INIT_STATE.GUEST);
  const [price, priceDispatch] = useReducer(priceReducer, INIT_STATE.PRICE);
  const [lowInputValue, setLowInputValue] = useState(0);
  const [highInputValue, setHighInputValue] = useState(CANVAS_SIZE.WIDTH);

  return (
    <FilterContext.Provider
      value={{
        schedule,
        scheduleDispatch,
        activeModalName,
        modalDispatch,
        guest,
        guestDispatch,
        price,
        priceDispatch,
        lowInputValue,
        setLowInputValue,
        highInputValue,
        setHighInputValue,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export { FilterContext, FilterProvider };
