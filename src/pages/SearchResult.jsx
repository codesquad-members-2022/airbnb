import Accommodations from 'components/Accommodations';
import Header from 'components/Header';
import Map from 'components/Map';
import ReservationModal from 'components/Modal/ReservationModal';
import { useContext } from 'react';
import { ReservationContext } from 'store/ReservationContext';
import styled from 'styled-components';

function SearchResult() {
  const { isActiveReservationModal } = useContext(ReservationContext);
  return (
    <>
      <Header pageType="sub" />
      <Wrap>
        <Accommodations />
        <Map />
        {isActiveReservationModal && <ReservationModal />}
      </Wrap>
    </>
  );
}

const Wrap = styled.div`
  display: flex;
  padding-top: 88px;
`;

export default SearchResult;
