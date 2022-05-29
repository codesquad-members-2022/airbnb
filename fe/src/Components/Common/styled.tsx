import styled from "styled-components";

interface ImgType {
  width: string;
  height: string;
  margin?: string;
}

export const Img = styled.img`
  ${({ width, height }: ImgType) => {
    return `width:${width}; height:${height}`;
  }};
  margin-left: 4px;
  ${(props: ImgType) => {
    if (!props.margin) {
      return;
    }

    return `margin:${props.margin}`;
  }};
  cursor: pointer;
`;
