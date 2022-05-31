import { useContext } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import styled from 'styled-components';
import { CalenderDateContext } from '@component/header/calender/CalenderDateProvider';

function ResetButton({ display = 'none' }) {
  const { resetInfos } = useContext(CalenderDateContext);

  const handleClick = e => {
    e.preventDefault();
    resetInfos();
  };

  return (
    <IconButton display={display} onClick={handleClick} onMouseDown={e => e.preventDefault()}>
      <ClearIcon fontSize="small" />
    </IconButton>
  );
}

const IconButton = styled.button`
  display: ${({ display }) => display};
  margin-left: auto;
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.color.grey6};
  border-radius: ${({ theme }) => theme.borderRadius.radius1};
`;

export default ResetButton;
