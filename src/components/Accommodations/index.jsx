import SIZE from 'styles/size';
import styled from 'styled-components';
import { useContext } from 'react';
import { AccommodationContext } from 'store/AccommodationContext';
import AccommodationHeader from './AccommodationHeader';
import AccommodationItem from './AccommodationItem';

function Accommodations() {
  const { accommodations } = useContext(AccommodationContext);
  return (
    <Wrap>
      <AccommodationHeader />
      <AccommodationItems>
        {accommodations.map(({ imageURL, name, location, option, price, grade, reviewCnt }, i) => (
          <AccommodationItem
            key={i}
            imageURL={imageURL}
            name={name}
            location={location}
            option={option}
            price={price}
            grade={grade}
            reviewCnt={reviewCnt}
          />
        ))}
      </AccommodationItems>
    </Wrap>
  );
}

const Wrap = styled.div`
  flex: 1;
  height: calc(100vh - ${SIZE.RESULT_PAGE_HEADER});
  padding: 32px 24px;
`;

const AccommodationItems = styled.div`
  display: flex;
  height: calc(100% - 80px);
  overflow-y: scroll;
  flex-direction: column;
  gap: 24px;
`;

export default Accommodations;
