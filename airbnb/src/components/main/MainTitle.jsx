import styled from 'styled-components';

function MainTitle({ title }) {
  return <Title>{title}</Title>;
}

const Title = styled.h2`
  font-size: 32px;
  margin: 20px 0;
`;

export default MainTitle;
