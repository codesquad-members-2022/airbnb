import React from "react";

import * as S from "./style";

// eslint-disable-next-line react/prop-types
const TextBox = ({ label, text, placeholder }) => {
  return (
    <S.TextBox type="text">
      <S.TextBoxLabel>{label}</S.TextBoxLabel>
      <S.TextBoxText type="text" placeholder={placeholder}>
        {text || placeholder}
      </S.TextBoxText>
    </S.TextBox>
  );
};

export default TextBox;
