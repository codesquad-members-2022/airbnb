import { useState, useContext } from 'react';
import styled from 'styled-components';
import ResetButton from '@/component/header/search-bar/ResetButton';
import SearchButton from '@/component/header/search-bar/SearchButton';
import { SearchBarContext } from '@component/header/search-bar/SearchBarProvider';

function SearchInput({ label, placeholder, isLastElement }) {
  const { isFocus, updateFocusState, currentInput } = useContext(SearchBarContext);

  const [isFilled, setIsFilled] = useState(true);

  return (
    <Container bgColor={currentInput === label ? 'white' : null} tabIndex="0" onFocus={() => updateFocusState(label)}>
      <div>
        <Label>{label}</Label>
        <Input type="text" placeholder={placeholder} value={'값넣기'} readOnly />
      </div>
      <ResetButton display={isFilled ? 'block' : 'none'} />
      {isLastElement ? <SearchButton open={isFocus} /> : <Line />}
    </Container>
  );
}

const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  display: inline-flex;
  align-items: center;
  width: calc(100% / 4);
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
