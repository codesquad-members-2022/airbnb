import styled from 'styled-components';
import { flexColumn } from 'style/mixins';

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

const FooterContentTitle = styled.button`
  text-align: left;
  font-weight: bold;
  margin: 10px;
`;

const FooterContentText = styled.button`
  text-align: left;
  margin: 10px;
`;

export default Content;
