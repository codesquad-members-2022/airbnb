import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import styled from 'styled-components';

function SearchButton({ isFocus = false }) {
  return (
    <SubmitButton type="submit" padding={isFocus ? '8px 16px 8px 8px' : '8px'}>
      <SearchRoundedIcon />
      <ButtonText display={isFocus ? 'block' : 'none'}>검색</ButtonText>
    </SubmitButton>
  );
}

const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ padding }) => padding};
  margin-left: auto;
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: ${({ theme }) => theme.borderRadius.radius1};
`;

const ButtonText = styled.span`
  display: ${({ display }) => display};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.xlarge};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export default SearchButton;
