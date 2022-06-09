import styled from 'styled-components';
import { PERSONNEL_TEXT } from '@/constants/PersonnelText';
import { ModalContainer } from '@/styled-component/ModalContainer';
import PersonnelSelectBox from '@personnel/PersonnelSelectBox';

const personnelText = Object.entries(PERSONNEL_TEXT);

function Personnel() {
  return (
    <Container>
      {personnelText.map(([key, { title, explanation }]) => (
        <PersonnelSelectBox key={key} title={title} explanation={explanation} />
      ))}
    </Container>
  );
}

const Container = styled(ModalContainer)`
  margin-left: auto;
  width: 400px;
`;

export default Personnel;
