import styled from 'styled-components';

export const Range = styled.input`
  width: 380px;
  height: 0;
  -webkit-appearance: none;
  position: absolute;
  cursor: pointer;
  transform: translate(-10px, -5px);
  background: none;
  left: 0;
  bottom: 70;
  &::-webkit-slider-thumb {
    -webkit-appearance: none; /* 기본 CSS 스타일을 적용하지 않기 위해서 */
    appearance: none; /* 기본 CSS 스타일을 적용하지 않기 위해서 */
    width: 20px; /* 슬라이더 핸들 길이 */
    height: 20px; /* 슬라이더 핸들 높이 */
    border-radius: 50%; /* 핸들 모양을 원모양으로 만들기 위함 */
    background: #000; /* 슬라이더 핸들 색상 */
    cursor: pointer; /* 슬라이더 핸들에 마우스를 갖다대면 포인터로 변경 */
  }
`;

export const Canvas = styled.canvas`
  /* position: relative; */
`;

export const RangeSliderWrapper = styled.div`
  position: relative;
`;
