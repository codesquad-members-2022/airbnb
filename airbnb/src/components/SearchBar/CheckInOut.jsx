import { Btn, ContentBox, BarTitle, BarContent } from './SearchBar_styled.jsx';
import { useInputState } from 'hooks/useInputState.tsx';
import { useInputDispatch } from 'hooks/useInputDispatch.tsx';
import { ReactComponent as DeleteIcon } from 'assets/svg/deleteBtn.svg';

function CheckInOut({ onClick, title }) {
  const { checkIn, checkOut } = useInputState();
  const { handelResetEvent } = useInputDispatch();

  let checkPoint;
  if (title === '체크인') checkPoint = checkIn;
  else if (title === '체크아웃') checkPoint = checkOut;
  else checkPoint = '';

  const deleteBtn =
    title === '체크아웃' && checkIn && checkOut ? (
      <DeleteIcon
        onClick={handelResetEvent}
        style={{ position: 'absolute', top: '25px', left: '350px' }}
      />
    ) : undefined;

  return (
    <>
      <Btn onClick={() => onClick('CHECK_IN_OUT')}>
        <ContentBox>
          <BarTitle>{title}</BarTitle>
          <BarContent>{checkPoint !== '' ? checkPoint : '날짜입력'}</BarContent>
        </ContentBox>
      </Btn>
      {deleteBtn}
    </>
  );
}

export default CheckInOut;
