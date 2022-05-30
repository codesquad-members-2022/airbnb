import styled from 'styled-components';
import ResetButton from './ResetButton';
import SearchButton from './SearchButton';
import { useState } from 'react';

function SearchInput({ label, placeholder, isLastElement, isCurrentInput, isFocus, setCurrentInput }) {
  const [isFilled, setIsFilled] = useState(false);

  const handleFocus = label => {
    setCurrentInput(label);
  };

  return (
    <Container
      bgColor={isCurrentInput ? 'white' : null}
      isLastElement={isLastElement}
      tabIndex="0"
      onFocus={() => handleFocus(label)}
    >
      <div>
        <Label>{label}</Label>
        <Input type="text" placeholder={placeholder} readOnly />
      </div>
      <ResetButton visibility={isFilled ? 'visible' : 'hidden'} />
      {isLastElement ? null : <Line />}
      {isLastElement ? <SearchButton isFocus={isFocus} /> : null}
    </Container>
  );
}

const Label = styled.div`
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 17px;
`;

const Input = styled.input`
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

const Container = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  ${({ isLastElement }) => {
    return isLastElement ? `width: 280px;` : `width: 180px;`;
  }}
  height: 37px;
  padding: 20px 30px;
  border-radius: ${({ theme }) => theme.borderRadius.radius1};
  background-color: ${({ theme, bgColor }) => theme.color[bgColor]};
`;

export default SearchInput;
