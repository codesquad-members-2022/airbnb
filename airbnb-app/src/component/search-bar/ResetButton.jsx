import ClearIcon from '@mui/icons-material/Clear';
import styled from 'styled-components';

function ResetButton({ visibility = 'hidden' }) {
  return (
    <IconButton visibility={visibility}>
      <ClearIcon fontSize="small" />
    </IconButton>
  );
}

const IconButton = styled.button`
  visibility: ${({ visibility }) => visibility};
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.color.grey6};
  border-radius: ${({ theme }) => theme.borderRadius.radius1};
`;

export default ResetButton;
