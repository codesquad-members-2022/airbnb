import styled from 'styled-components';

// import { styled as muiStyled } from '@mui/system';
import Button from '@mui/material/Button';
import { ButtonGroup } from '@mui/material';

export const MapContainer = styled.section`
  position: relative;
  width: 50%;
  height: 100%;
`;

export const Map = styled.div`
  width: 100%;
  height: 100%;
`;

export const CButtonGroup = styled(ButtonGroup)`
  position: 'absolute';
  top: 0;
  right: 0;
  z-index: 1;
  margin: '3.2rem 3.2rem 0 0';
  padding: '0.8rem';
`;

export const MapBtn = styled(Button)`
  && {
    background-color: #fff;
    color: #000;
  }
  &&:hover {
    background-color: #fff;
  }
`;
