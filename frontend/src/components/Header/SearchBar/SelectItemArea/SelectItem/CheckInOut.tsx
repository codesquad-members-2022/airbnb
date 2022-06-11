import { useContext, useRef } from "react";

import { Grid } from "@mui/material";

import { SearchBarStateContext } from "contexts/contexts";
import RouterContext from "router/Contexts";
import { getFormattedDate } from "utils/utils";

import ButtonArea from "../ButtonArea/ButtonArea";
import { ModalTemplate } from "../SelectItemTemplate/SelectItemTemplate";
import SelectItem, { SelectItemProps, WhiteSpace } from "./SelectItem";

const wrapperId = "check-in-out-wrap";

const CheckInOut = ({
  anchorEl,
  setAnchorEl,
  onClose,
}: SelectItemProps): JSX.Element => {
  const { isSearchBarFullSize, setIsSearchBarFullSize } = useContext(
    SearchBarStateContext
  )!;
  const { queryData, page } = { ...useContext(RouterContext) };

  const $wrap = useRef<HTMLDivElement>(null);
  const isOpen = anchorEl?.id === wrapperId;

  const handleClick = () => {
    setAnchorEl?.($wrap.current);
  };

  const isQueryDataIncludesDateRange =
    !!queryData?.checkIn || !!queryData?.checkOut;

  const checkInDesc =
    (!!queryData?.checkIn && `${getFormattedDate(queryData.checkIn)}`) || "";

  const checkOutDesc =
    (!!queryData?.checkOut && `${getFormattedDate(queryData.checkOut)}`) || "";

  const description =
    isQueryDataIncludesDateRange && page !== "index"
      ? `${checkInDesc} - 
      ${checkOutDesc}`
      : "일정입력";

  return (
    <Grid
      item
      container
      xs={isSearchBarFullSize || page === "index" ? 5 : 3}
      component="div"
      id={wrapperId}
      ref={$wrap}
    >
      {((isSearchBarFullSize || page === "index") && (
        <>
          <SelectItem
            gridStyle={{
              xs: 5,
            }}
            buttonId="check-in-date-button"
            buttonAreaLabel="체크인 날짜 설정"
            title="체크인"
            desc={checkInDesc || "날짜입력"}
            handleClick={handleClick}
            open={isOpen}
          />
          <SelectItem
            gridStyle={{
              xs: 5,
              pl: 1,
            }}
            buttonId="check-out-date-button"
            buttonAreaLabel="체크아웃 날짜 설정"
            title="체크아웃"
            desc={checkOutDesc || "날짜 입력"}
            handleClick={handleClick}
            open={isOpen}
          />
          <ModalTemplate open={isOpen} anchorEl={anchorEl} onClose={onClose}>
            테스트용
          </ModalTemplate>
        </>
      )) || (
        <SelectItem
          gridStyle={{
            xs: 10,
          }}
          buttonId="check-in-out-date-button"
          buttonAreaLabel="체크인, 체크아웃 날짜 설정"
          title="체크인"
          desc={description}
          isDiscriptionFiltered={isQueryDataIncludesDateRange}
          open={isOpen}
          anchorEl={anchorEl}
          handleClick={() => {
            setIsSearchBarFullSize(true);
          }}
          createNewPopup
        >
          체크인아웃
        </SelectItem>
      )}
      {(isOpen && <ButtonArea icon="close" divide xs={2} />) || (
        <WhiteSpace divide xs={2} />
      )}
    </Grid>
  );
};

export default CheckInOut;
