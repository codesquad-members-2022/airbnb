import ClearIcon from '@mui/icons-material/Clear';
import styled from 'styled-components';

function ResetButton({ display = 'none' }) {
  return (
    <IconButton display={display}>
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
