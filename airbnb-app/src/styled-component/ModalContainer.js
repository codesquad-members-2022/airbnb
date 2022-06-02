import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: relative;
  padding: 40px;
  margin: 30px auto 0;
  background-color: ${({ theme }) => theme.modal.backgourndColor};
  border-radius: ${({ theme }) => theme.modal.borderRadius};
  box-shadow: ${({ theme }) => theme.modal.boxShadow};
`;
