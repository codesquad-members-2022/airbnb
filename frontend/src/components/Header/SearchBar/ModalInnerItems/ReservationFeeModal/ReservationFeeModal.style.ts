import styled from "@emotion/styled";

import pauseCircle from "assets/pause-circle2.svg";
import theme from "styles/theme";

const canvasSize = theme.elementSize.searchBar.priceChart;

const Wrapper = styled.section`
  font-weight: 400;

  h2 {
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 16px;
  }

  .price-range {
    font-size: 18px;
  }

  .price-average {
    font-size: 14px;
    color: #828282;
  }
`;

const PriceChartCanvas = styled.canvas`
  width: ${canvasSize.width};
  height: ${canvasSize.height};
  margin-top: 37px;
`;

const RangeSliderWrapper = styled.div`
  position: relative;
  width: 365px;

  .slider {
    position: relative;
    z-index: 1;
    height: 8px;
  }

  input[type="range"] {
    position: absolute;
    bottom: 0;
    pointer-events: none;
    -webkit-appearance: none;
    transform: translate(-11px);
    background-color: transparent;
    z-index: 2;
    height: 8px;
    width: calc(365px + 22px);
    opacity: 1;

    &::-webkit-slider-thumb {
      pointer-events: all;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background-color: #4f4f4f;
      background: url(${pauseCircle}) no-repeat center;
      -webkit-appearance: none;
      cursor: pointer;
    }
  }
`;

export { Wrapper, RangeSliderWrapper, PriceChartCanvas };
