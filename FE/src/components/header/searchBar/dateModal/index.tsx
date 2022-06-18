import React, { useContext } from 'react';
import Modal from 'react-modal';

import { Context } from 'components/context/ModalContext';
import CalenderApp from 'components/calender';
import { dateCustomStyles, ModalWrapper } from 'components/header/searchBar/dateModal/dateModal.style';

interface DateModalProps {
  filteredDate?: FilterType;
}

interface FilterType {
  start?: Date;
  end?: Date;
  filtered?: {
    [year: number]: {
      [month: number]: Set<number>;
    };
  };
}

function DateModal({ filteredDate }: DateModalProps) {
  const { isDateOpen, setIsDateOpen, checkInDate, checkOutDate, setCheckInDate, setCheckOutDate } = useContext(Context);

  const onCloseModal = () => {
    if (setIsDateOpen) setIsDateOpen(false);
  };

  const getCalendarProps = () => {
    const today = checkInDate || new Date();
    return {
      count: 2,
      year: today.getFullYear(),
      month: today.getMonth() + 1,
      isSlider: true,
      period: {
        checkIn: checkInDate,
        checkOut: checkOutDate,
      },
      filter: { ...filteredDate },
    };
  };

  const setCheckedDate = (checkIn?: Date, checkOut?: Date) => {
    if (checkIn) {
      setCheckInDate(checkIn);
    }

    if (checkOut) {
      setCheckOutDate(checkOut);
    }
  };

  return (
    <Modal isOpen={isDateOpen} style={dateCustomStyles} onRequestClose={onCloseModal} ariaHideApp={false}>
      <ModalWrapper>
        <CalenderApp {...getCalendarProps()} setCheckedDate={setCheckedDate} />
      </ModalWrapper>
    </Modal>
  );
}

const defaultFilter = {
  filtered: {
    2022: {
      6: new Set([1, 2, 3, 4, 5, 6, 7]),
    },
  },
};

DateModal.defaultProps = {
  filteredDate: defaultFilter,
};

export default DateModal;
