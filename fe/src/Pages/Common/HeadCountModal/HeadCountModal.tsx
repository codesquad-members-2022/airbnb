import { useOutsideClick } from "Hook/useOutsideClick";
import { useHeadCount } from "Context/HeadCountProvider";
import HeadCount from "Components/HeadCount/HeadCount";

interface ClickEventType {
  type: string | undefined;
  target: string | undefined;
}

export default function HeadCountModal({ headCountRef, headCountStyle }: any) {
  const [headCountState, dispatchHeadCount] = useHeadCount();
  const { isHeadCountOpen } = headCountState;

  const isAdultEmpty = () => {
    const { adult } = headCountState;
    return !adult;
  };

  const isDispatchCondition = ({ type, target }: ClickEventType) => {
    if (type === "MINUS" && target && headCountState[target] === 0) {
      return false;
    }
    if (
      type === "MINUS" &&
      target === "adult" &&
      headCountState[target] === 1 &&
      (headCountState.baby || headCountState.child)
    ) {
      return false;
    }
    if (target && type === "PLUS" && Number(headCountState[target]) === 8) {
      return false;
    }
    return true;
  };

  const handleClick = ({ type, target }: ClickEventType) => {
    if (!isDispatchCondition({ target, type })) {
      return;
    }
    if (type === "PLUS" && target !== "adult" && isAdultEmpty()) {
      dispatchHeadCount({ type, target: "adult" });
    }

    dispatchHeadCount({ type, target });
  };

  const handleOutsideClick = () => {
    dispatchHeadCount({
      type: "CLOSE",
    });
  };

  useOutsideClick(headCountRef, handleOutsideClick);

  return (
    isHeadCountOpen && (
      <HeadCount
        headCountRef={headCountRef}
        headCountState={headCountState}
        handleClick={handleClick}
        headCountStyle={headCountStyle}
      />
    )
  );
}
