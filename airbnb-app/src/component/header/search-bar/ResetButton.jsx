import ClearIcon from '@mui/icons-material/Clear';
import styled from 'styled-components';

function ResetButton({ display = 'none', onClick }) {
  const handleClick = e => {
    e.preventDefault();
    onClick();
  };

  return (
    <Box>
      <IconButton display={display} onClick={handleClick} onMouseDown={e => e.preventDefault()}>
        <ClearIcon fontSize="small" />
      </IconButton>
    </Box>
  );
}

const Box = styled.div`
  margin-left: auto;
  width: 20px;
`;

const IconButton = styled.button`
  display: ${({ display }) => display};
  margin-left: auto;
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.color.grey6};
  border-radius: ${({ theme }) => theme.borderRadius.radius1};
`;

export default ResetButton;
