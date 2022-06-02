import React, { useState, createContext, useMemo, SetStateAction } from 'react';
import { getStringDate } from '@utils/util';
import { TODAY, MILLISECOND_FOR_ONE_DAY } from '@constants/date';
import { ReservationInfo } from '@constants/type';

const getAfterAWeek = () => {
  const afterAWeek = new Date(TODAY.getTime() + 7 * MILLISECOND_FOR_ONE_DAY);

  return getStringDate(afterAWeek, '-');
};

interface UseReservationInfo {
  reservationInfo: ReservationInfo;
  setReservationInfo: SetStateAction<object>;
}

const initialReservationInfo = {
  checkin: getStringDate(TODAY, '-'),
  checkout: getAfterAWeek(),
  minPrice: 10000,
  maxPrice: 150000,
  personnel: {
    adult: 2,
    child: 0,
    preschooler: 0
  }
};

const ReservationInfoContext = createContext<UseReservationInfo>({
  reservationInfo: initialReservationInfo,
  setReservationInfo: () => initialReservationInfo
});

function ReservationInfoProvider({ children }: { children: React.ReactNode }) {
  const [reservationInfo, setReservationInfo] = useState(initialReservationInfo);
  const reservationState = useMemo(() => ({ reservationInfo, setReservationInfo }), []);

  return (
    <ReservationInfoContext.Provider value={reservationState}>
      {children}
    </ReservationInfoContext.Provider>
  );
}

export { ReservationInfoContext, ReservationInfoProvider };
