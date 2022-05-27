import { Flex, Spacer } from '@chakra-ui/react';
import { Fragment } from 'react';
import styled from 'styled-components';

import MainTitle from './MainTitle';

function TripInfo({ title, data }) {
  return (
    <>
      <MainTitle title={title} />
      <Flex>
        {data.map(({ id, img, name, content }) => (
          <Fragment key={id}>
            <TripItem>
              <img src={img} alt={name} />
              <span>{content}</span>
            </TripItem>
            <Spacer />
          </Fragment>
        ))}
      </Flex>
    </>
  );
}

const TripItem = styled.div`
  img {
    width: 350px;
  }
  span {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    margin-top: 10px;
  }
`;

export default TripInfo;
