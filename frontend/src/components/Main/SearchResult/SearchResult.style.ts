import { Container, ContainerProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const Wrapper = styled(Container)<ContainerProps>(
  ({ theme: { elementSize, whiteSpace } }) => `
  display: flex;
  position: absolute;
  z-index: -1;
  top: ${elementSize.header.others.height};
  left : 50%;
  transform: translateX(-50%);
  width: 100%;
  height: calc(
    100vh - ${parseInt(elementSize.header.others.height, 10)}px
  );
  padding:  0 ${whiteSpace.inner} !important;

  .accomodations-list-area {
    flex: 45;
    padding: 12px 24px 0 0;

    .title {
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 32px;
    }
  }

  .accomodations-list {
    height: calc(
      100vh - ${elementSize.header.others.height} - (32 * 2) px
    );
    overflow-y: auto;
  }

  .accomodations-item {
    padding-bottom: 24px;
    display: flex;

    &:not(:last-child) {
      border-bottom: 1px solid #e0e0e0;
    }

    &:not(:first-of-type) {
      padding-top: 24px;
    }

    .item-info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      font-weight: 400;
    }

    .info-desc-wrap,
    .info-review-total-area {
      display: flex;
      justify-content: space-between;
    }

    .thumbnail {
      margin-right: 24px;

      img {
        width: 330px;
        height: 200px;
        border-radius: 10px;
      }
    }

    .item:not(:last-child) {
      margin-bottom: 8px;
    }

    .info-desc {
      font-size: 12px;
      color: #828282;
    }

    .info-name {
      font-size: 14px;
    }

    .info-review-count {
      color: #828282;
      margin-left: 5px;
    }

    .info-price,
    .info-price-total {
      text-align: right;
    }

    .info-total-price {
      color: #828282;
      text-decoration: underline;
    }

  }
`
);

export default Wrapper;
