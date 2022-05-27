import ButtonArea from "./ButtonArea/ButtonArea";
import SelectItem from "./SelectItem/SelectItem";
import SelectItemAreaWrapper from "./SelectItemArea.style";
import SelectItemTemplate from "./SelectItemTemplate/SelectItemTemplate";

const SelectItemArea = (): JSX.Element => {
  return (
    <SelectItemAreaWrapper container columns={12}>
      <SelectItem
        gridStyle={{
          xs: 2,
        }}
        buttonId="check-in-date-button"
        buttonAreaLabel="체크인 날짜 설정"
        title="안녕하세요"
        desc="호톨비"
        modalAnchorStyle={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        테스트용문구
      </SelectItem>
      <SelectItem
        gridStyle={{
          xs: 2,
          pl: 1,
        }}
        buttonId="check-out-date-button"
        buttonAreaLabel="체크아웃 날짜 설정"
        title="체크아웃"
        desc="체크아웃 영역"
        modalAnchorStyle={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        테스트용문구 : 체크아웃 영역
      </SelectItem>
      <ButtonArea icon="close" divide />
      <SelectItemTemplate xs={2} pl={1}>
        요금 설정 영역
      </SelectItemTemplate>
      <ButtonArea icon="close" divide />
      <SelectItemTemplate xs={2} pl={1}>
        인원 설정 영역
      </SelectItemTemplate>
      <ButtonArea icon="close" />
      <ButtonArea icon="search" />
    </SelectItemAreaWrapper>
  );
};

export default SelectItemArea;
