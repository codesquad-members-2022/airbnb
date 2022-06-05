import * as S from "./style";

export type TextBoxProps = {
  label: string;
  placeholder: string;
  textContent: string | null;
};

const TextBox = ({ label, placeholder, textContent }: TextBoxProps) => {
  console.log(placeholder, textContent);
  return (
    <S.TextBox>
      <S.TextBoxLabel>{label}</S.TextBoxLabel>
      <S.TextBoxText textContent={textContent}>{textContent || placeholder}</S.TextBoxText>
    </S.TextBox>
  );
};

export default TextBox;
