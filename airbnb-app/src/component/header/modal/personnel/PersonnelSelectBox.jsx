import styled from 'styled-components';
import PersonnelController from '@personnel/PersonnelController';
import { Title } from '@/styled-component/Title';

function PersonnelSelectBox({ title, explanation }) {
  return (
    <Container>
      <div>
        <Title>{title}</Title>
        <Explanation>{explanation}</Explanation>
      </div>
      <PersonnelController title={title} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:not(:last-child) {
    padding-bottom: 30px;
    margin-bottom: 30px;
    border-bottom: 1px solid #c4c4c4;
  }
`;

const Explanation = styled.div`
  width: 230px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.color.grey3};
`;

export default PersonnelSelectBox;
