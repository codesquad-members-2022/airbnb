import { useContext } from 'react';
import styled, { useTheme } from 'styled-components';
import { PERSONNEL_MIN as MIN, PERSONNEL_MAX as MAX } from '@/constants/PersonnelText';
import { isMax, isMin } from '@/utils/utils';
import { PersonnelContext } from '@/context/PersonnelProvider';
import { PersonnelSetButton } from '@personnel/ControllerButtons';

function PersonnelController({ title }) {
  const theme = useTheme();
  const { personnel, addPerson, removePerson, canNotRemoveAdult } = useContext(PersonnelContext);

  const addBtnStyle = {
    width: '30px',
    fill: isMax(personnel[title], MAX) ? theme.color.grey5 : theme.color.grey3,
  };

  const removeBtnStyle = {
    width: '30px',
    fill: isMin(personnel[title], MIN) || canNotRemoveAdult(title) ? theme.color.grey5 : theme.color.grey3,
  };

  return (
    <>
      <PersonnelSetButton
        type={'remove'}
        onClick={() => {
          removePerson(title);
        }}
        style={removeBtnStyle}
      />
      <SelectedNum>{personnel[title]}</SelectedNum>
      <PersonnelSetButton
        type={'add'}
        onClick={() => {
          addPerson(title);
        }}
        style={addBtnStyle}
      />
    </>
  );
}

const SelectedNum = styled.span`
  display: block;
  width: 10px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.xlarge};
  color: ${({ theme }) => theme.color.grey1};
`;

export default PersonnelController;
