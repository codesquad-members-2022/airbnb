import { StyledCrossIcon } from 'components/Header/SearchBar/searchBar.styled';

type Aria = {
  ariaLabel: string;
};

function ResetButton({ ariaLabel }: Aria) {
  return (
    <button type="button" aria-label={ariaLabel}>
      <StyledCrossIcon />
    </button>
  );
}

export default ResetButton;
