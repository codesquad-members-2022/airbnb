import styled from 'styled-components';
import { flexBetween } from 'style/mixins';

import MainTitle from './MainTitle';

function CityInfo({ title, data }) {
  return (
    <>
      <MainTitle title={title} />
      <Ul>
        {data.map(({ id, img, name, content }) => (
          <Li key={id}>
            <CityImgSection>
              <img src={img} alt={name} />
            </CityImgSection>
            <CityTextSection>
              <Content>{name}</Content>
              <Content>{content}</Content>
            </CityTextSection>
          </Li>
        ))}
      </Ul>
    </>
  );
}

const Ul = styled.ul`
  ${flexBetween};
  width: 100%;
  flex-flow: row wrap;
`;

const Li = styled.li`
  width: 25%;
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
