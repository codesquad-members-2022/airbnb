import React from "react";

import * as S from "./style";

type TextBoxProps = {
  label: string;
  placeholder: string;
  textContent: string | null;
  styles?: string;
};

const TextBox = ({ label, placeholder, textContent, styles }: TextBoxProps) => {
  return (
    <S.TextBox styles={styles}>
      <S.TextBoxLabel>{label}</S.TextBoxLabel>
      <S.TextBoxText textContent={textContent}>{textContent || placeholder}</S.TextBoxText>
    </S.TextBox>
  );
};

export default TextBox;
