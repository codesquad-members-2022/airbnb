import styled from 'styled-components';

export const ModalContainer = styled.div`
  padding: 40px;
  margin-top: 230px;
  background-color: ${({ theme }) => theme.modal.backgourndColor};
  border-radius: ${({ theme }) => theme.modal.borderRadius};
  box-shadow: ${({ theme }) => theme.modal.boxShadow};
`;
