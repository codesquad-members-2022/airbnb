import { CommonButton, Label, SelectedOption } from 'components/Header/SearchBar/searchBar.styled';

type ButtonInfo = {
  id: string | undefined;
  title: string;
  inputText: string;
  ariaLabel: string;
};

type Style = {
  [key: string]: number | string;
};

type InputButtonType = {
  clickModal: (e: React.MouseEvent<HTMLElement>) => void;
  buttonInfo: ButtonInfo;
  styleOptions?: Style;
};

function InputButton({ clickModal, buttonInfo, styleOptions }: InputButtonType) {
  return (
    <CommonButton
      onClick={clickModal}
      aria-label={buttonInfo.ariaLabel}
      style={styleOptions}
      data-id={buttonInfo.id}
    >
      <Label>{buttonInfo.title}</Label>
      <SelectedOption>{buttonInfo.inputText}</SelectedOption>
    </CommonButton>
  );
}

InputButton.defaultProps = {
  styleOptions: undefined,
};

export default InputButton;
