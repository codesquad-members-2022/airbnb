import { flexColumn } from 'style/mixins';
import styled from 'styled-components';

function Content({ data }) {
  return (
    <FooterContent>
      <FooterContentTitle>{data.title}</FooterContentTitle>
      {data.info.map(({ id, content }) => (
        <FooterContentText key={id}>{content}</FooterContentText>
      ))}
    </FooterContent>
  );
}

const FooterContent = styled.div`
  ${flexColumn}
  margin-top: 20px;
  margin-left: 30px;
  width: 25%;
`;

const FooterContentTitle = styled.p`
  font-weight: bold;
  margin: 10px;
  cursor: pointer;
`;

const FooterContentText = styled.p`
  margin: 10px;
  cursor: pointer;
`;

export default Content;
