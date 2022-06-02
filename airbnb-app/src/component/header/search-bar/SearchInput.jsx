import { useContext } from 'react';
import styled from 'styled-components';
import ResetButton from '@/component/header/search-bar/ResetButton';
import SearchButton from '@/component/header/search-bar/SearchButton';
import { SearchBarContext } from '@/context/SearchBarProvider';

function SearchInput({ value, resetBtnHandler, label, placeholder, isLastElement }) {
  const { isFocus, updateFocusState, currentInput } = useContext(SearchBarContext);

  const isCurrentInput = currentInput === label;

  return (
    <Container
      flexGrow={isLastElement ? 2 : 1}
      bgColor={isCurrentInput ? 'white' : null}
      tabIndex="0"
      onFocus={() => updateFocusState(label)}
    >
      <div>
        <Label>{label}</Label>
        <Input type="text" placeholder={placeholder} value={value} readOnly />
      </div>
      <ResetButton display={value && isCurrentInput ? 'block' : 'none'} onClick={resetBtnHandler} />
      {isLastElement ? <SearchButton open={isFocus} /> : <Line />}
    </Container>
  );
}

const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  display: inline-flex;
  align-items: center;
  flex-grow: ${({ flexGrow }) => flexGrow};
  padding: 20px 30px;
  border-radius: ${({ theme }) => theme.borderRadius.radius1};
  background-color: ${({ theme, bgColor }) => theme.color[bgColor]};
`;

const Label = styled.div`
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 17px;
`;

const Input = styled.input`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: 20px;
`;

const Line = styled.span`
  position: absolute;
  right: 0;
  height: 44px;
  border-left: 1px solid ${({ theme }) => theme.color.grey5};
`;

export default SearchInput;
