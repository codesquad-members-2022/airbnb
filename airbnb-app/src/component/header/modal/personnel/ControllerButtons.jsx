import styled from 'styled-components';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

function PersonnelSetButton({ type, onClick, style }) {
  return (
    <Button onClick={onClick}>
      {type === 'add' ? <AddCircleOutlineIcon sx={style} /> : <RemoveCircleOutlineIcon sx={style} />}
    </Button>
  );
}

const Button = styled.button`
  background-color: transparent;
`;

export { PersonnelSetButton };
