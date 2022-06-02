import { MODAL_REF_IDX } from "Helpers/constant";
import { HeadCountContainer } from "./HeadCount.styled";
import TicketBox from "./TicketBox/TicketBox";

interface ClickEventType {
  type: string | undefined;
  target: string | undefined;
}

interface InfoType {
  title: string;
  description: string;
  classification: "adult" | "child" | "baby";
}

interface StateType {
  isHeadCountOpen: boolean;
  adult: number;
  child: number;
  baby: number;
}

interface HeadCountType {
  headCountStyle?: string;
  headCountRef?: React.MutableRefObject<HTMLElement[] | null[]>;
  headCountState?: StateType;
  handleClick?: (T: ClickEventType) => void;
}

const adultInfo: InfoType = {
  title: "성인",
  description: "만 13세 이상",
  classification: "adult",
};
const childInfo: InfoType = {
  title: "어린이",
  description: "만 2-12세",
  classification: "child",
};
const babyInfo: InfoType = {
  title: "유아",
  description: "만 2세 미만",
  classification: "baby",
};

export default function HeadCount({
  headCountRef,
  headCountState,
  handleClick,
  headCountStyle,
}: HeadCountType) {
  return (
    <HeadCountContainer
      ref={(el) => headCountRef && (headCountRef.current[MODAL_REF_IDX] = el)}
      containerStyle={headCountStyle}
    >
      <TicketBox handleClick={handleClick} headCountState={headCountState} contents={adultInfo}></TicketBox>
      <TicketBox handleClick={handleClick} headCountState={headCountState} contents={childInfo}></TicketBox>
      <TicketBox handleClick={handleClick} headCountState={headCountState} contents={babyInfo}></TicketBox>
    </HeadCountContainer>
  );
}
