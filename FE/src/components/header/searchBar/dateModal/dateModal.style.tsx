import styled from 'styled-components';

const dateCustomStyles = {
  overlay: {
    margin: '0px auto',
    width: '1440px',
    height: '640px',
    backgroundColor: 'transparent',
    boxSizing: 'content-box',
    position: 'absolute',
  },
  content: {
    position: 'absolute',
    top: '188px',
    left: '18%',
    width: '916px',
    height: '455px',
    backgroundColor: 'transparent',
    border: '0px',
    padding: 0,
  },
};

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: ${({ theme: { colors } }) => colors.white};
  box-shadow: 0px 4px 10px rgba(51, 51, 51, 0.1), 0px 0px 4px rgba(51, 51, 51, 0.05);
  border-radius: 40px;
`;

export { dateCustomStyles, ModalWrapper };
