import styled from "@emotion/styled";

import theme from "styles/theme";

const Wrapper = styled.div`
  flex: 55;
  z-index: -1;
  position: relative;

  .map-area {
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .float-item {
    position: absolute;
  }

  .map-checkbox-wrap {
    background-color: ${theme.palette.white.main};
    top: 30px;
    right: calc(50% - ${210 / 2}px);
    width: 210px;
    font-size: 14px;
    padding-right: 10px;
    border-radius: 0.5rem;
    box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.1);

    .MuiFormControlLabel-root {
      margin: 0;
    }

    .MuiSvgIcon-root {
      width: 32px;
      height: 32px;
    }
  }

  .zoom-button {
    display: flex;
    top: 30px;
    right: 30px;
    padding: 3px;
    flex-direction: column;
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.1);

    .MuiButtonBase-root {
      border-radius: 0;
    }

    .MuiButtonBase-root:not(:last-child) {
      border-bottom: 1px solid #e0e0e0;
    }

    .MuiSvgIcon-root {
      width: 24px;
    }
  }
`;

export default Wrapper;
