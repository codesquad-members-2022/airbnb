import styled from 'styled-components';
import Modal from './Modal';

import CalendarModal from 'components/Calendar/CalendarModal';
import PriceRangeModal from 'components/PriceRange/PriceRange';
import PersonnelModal from 'components/personnel/PersonnelModal';

import {
  calendarModalStyle,
  personnelModalStyle,
  priceRangeModalStyle,
} from './ModalStyle';

function RenderModal({ selectedContent }) {
  const renderModal = (content) => {
    switch (content) {
      case 'CHECK_IN_OUT':
        return (
          <CalendarModalContainer>
            <CalendarModal />
          </CalendarModalContainer>
        );
      case 'PRICE_RANGE':
        return (
          <PriceRangeContainer>
            <PriceRangeModal />
          </PriceRangeContainer>
        );
      case 'TOTAL_GUESTS':
        return (
          <PersonnelContainer>
            <PersonnelModal />
          </PersonnelContainer>
        );
      default:
        return;
    }
  };

  return renderModal(selectedContent);
}

const CalendarModalContainer = styled(Modal)`
  ${calendarModalStyle}
`;

const PriceRangeContainer = styled(Modal)`
  ${priceRangeModalStyle}
`;

const PersonnelContainer = styled(Modal)`
  ${personnelModalStyle}
`;

export default RenderModal;
