import styled from 'styled-components';
import { flexBetween } from 'style/mixins';

import MainTitle from './MainTitle';

function CityInfo({ title, data }) {
  return (
    <>
      <MainTitle title={title} />
      <CityContainer>
        {data.map(({ id, img, name, content }) => (
          <CityItem key={id}>
            <CityImgSection>
              <img src={img} alt={name} />
            </CityImgSection>
            <CityTextSection>
              <Content>{name}</Content>
              <Content>{content}</Content>
            </CityTextSection>
          </CityItem>
        ))}
      </CityContainer>
    </>
  );
}

const CityContainer = styled.ul`
  ${flexBetween};
  width: 100%;
  flex-flow: row wrap;
`;

const CityItem = styled.li`
  width: 25%;
  cursor: pointer;
`;

const CityImgSection = styled.div`
  width: 150px;
  height: 200px;
  float: left;
  margin-right: 10px;

  img {
    width: 150px;
    height: 150px;
  }
`;

const CityTextSection = styled.div`
  width: 200px;
  height: 150px;
  float: left;
`;

const Content = styled.span`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-top: 30px;
`;
export default CityInfo;
