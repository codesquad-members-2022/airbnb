import styled from 'styled-components';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

function AddButton({ onClick, style }) {
  return (
    <Button onClick={onClick}>
      <AddCircleOutlineIcon sx={style} />
    </Button>
  );
}

function RemoveButton({ onClick, style }) {
  return (
    <Button onClick={onClick}>
      <RemoveCircleOutlineIcon sx={style} />
    </Button>
  );
}

const Button = styled.button`
  background-color: transparent;
`;

export { AddButton, RemoveButton };
