import { useContext } from "react";

import { SearchBarStateContext } from "contexts/contexts";
import RouterContext from "router/Contexts";

import ButtonArea from "../ButtonArea/ButtonArea";
import SelectItem, { SelectItemProps, WhiteSpace } from "./SelectItem";

const buttonId = "people-count-button";

const PeopleCount = ({
  onClick,
  onClose,
  anchorEl,
}: SelectItemProps): JSX.Element => {
  const { isSearchBarFullSize, setIsSearchBarFullSize } = useContext(
    SearchBarStateContext
  )!;
  const { queryData, page } = { ...useContext(RouterContext) };

  const isQueryDataIncludesPepoleCount =
    !!queryData?.numAdult || !!queryData?.numChild;

  const description =
    isQueryDataIncludesPepoleCount && page !== "index"
      ? `게스트 ${
          (Number(queryData.numAdult) || 0) + (Number(queryData.numChild) || 0)
        }명`
      : "게스트 추가";

  const isOpen = anchorEl?.id === buttonId;

  return (
    <>
      <SelectItem
        gridStyle={
          isSearchBarFullSize || page === "index"
            ? {
                xs: 2,
                pl: 2,
              }
            : {
                xs: 3,
                pl: 1,
              }
        }
        buttonId={buttonId}
        buttonAreaLabel="숙박 인원 설정"
        title="인원"
        desc={description}
        isDiscriptionFiltered={isQueryDataIncludesPepoleCount}
        open={isOpen}
        handleClick={
          isSearchBarFullSize || page === "index"
            ? onClick
            : () => {
                setIsSearchBarFullSize(true);
                // NOTE: peoplecount모달도 open상태로 되면 좋음.
              }
        }
        anchorEl={anchorEl}
        handleClose={onClose}
        createNewPopup
      >
        인원조정영역
      </SelectItem>
      {(isOpen && <ButtonArea icon="close" />) || <WhiteSpace xs={1} />}
    </>
  );
};

export default PeopleCount;
