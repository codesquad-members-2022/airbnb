import { createContext, useState } from 'react';
// import reservationModalReducer from 'reducer/reservationModalReducer';

const ReservationContext = createContext();

const INIT_RESERVATION_INFOMATION = {
  price: null,
  reviewCnt: null,
};

function ReservationProvider({ children }) {
  const [isActiveReservationModal, setIsActiveReservationModal] = useState(false);
  const [reservationInfomation, setReservationInfomation] = useState(INIT_RESERVATION_INFOMATION);
  return (
    <ReservationContext.Provider
      value={{
        isActiveReservationModal,
        setIsActiveReservationModal,
        reservationInfomation,
        setReservationInfomation,
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
}

export { ReservationContext, ReservationProvider };
