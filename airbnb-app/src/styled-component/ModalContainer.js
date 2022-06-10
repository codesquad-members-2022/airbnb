import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: absolute;
  padding: 40px;
  top: calc(100% + 30px);
  background-color: ${({ theme }) => theme.modal.backgourndColor};
  border-radius: ${({ theme }) => theme.modal.borderRadius};
  box-shadow: ${({ theme }) => theme.modal.boxShadow};
`;
