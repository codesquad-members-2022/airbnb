import { useOutsideClick } from "Hook/useOutsideClick";
import { useHeadCount } from "Context/HeadCountProvider";
import HeadCount from "Components/HeadCount/HeadCount";

interface ClickEventType {
  type: string | undefined;
  target: string | undefined;
}

export default function HeadCountModal({ headCountRef }: any) {
  const [headCountState, dispatchHeadCount] = useHeadCount();
  const { isHeadCountOpen } = headCountState;

  const handleClick = ({ type, target }: ClickEventType) => {
    if (type === "MINUS" && target && headCountState[target] === 0) {
      return;
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
      <HeadCount headCountRef={headCountRef} headCountState={headCountState} handleClick={handleClick} />
    )
  );
}
