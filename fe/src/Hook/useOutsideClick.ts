import { useEffect } from "react";

export function useOutsideClick(elements: any, callback: any) {
  useEffect(() => {
    const handleMouseDown = (event: any) => {
      for (let element of elements.current) {
        // undefined: 모달은 활성화 되어 있지만, 버튼은 비활성화 상태일때는 함수를 탈출하지 않는다.
        if (element === undefined) {
          continue;
        }

        // 모달이 비활성화(Null) 또는 모달(또는 버튼) 내부 클릭일 경우 콜백 함수를 실행하지 않는다.
        if (element === null || element.contains(event.target)) {
          return;
        }
      }
      callback();
    };

    document.addEventListener("mousedown", handleMouseDown);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, [elements, callback]);
}
