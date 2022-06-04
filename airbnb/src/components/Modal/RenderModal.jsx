import styled from 'styled-components';
import CalendarModal from 'components/Calendar/CalendarModal';
import PriceRangeModal from 'components/PriceRange/PriceRange';
import Modal from './Modal';
import { calendarModalStyle, priceRangeModalStyle } from './ModalStyle';

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
        return;
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

export default RenderModal;
