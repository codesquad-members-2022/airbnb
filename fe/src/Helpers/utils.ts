import { MONTH_DICTIONARY } from "./constant";

interface flexBoxPropertyType {
  justify?: string;
  align?: string;
  direction?: string;
  wrap?: string;
}

export interface flexBoxType extends flexBoxPropertyType {
  flex: boolean;
}

export function applyFlex({ flex, justify, align, direction, wrap }: flexBoxType) {
  return (
    flex &&
    `${getFlexTemplate({ justify, align, direction, wrap })}
    `
  );
}

function getFlexTemplate({ justify, align, direction, wrap }: flexBoxPropertyType) {
  justify = justify || "start";
  align = align || "stretch";
  direction = direction || "row";
  wrap = wrap || "nowrap";
  return `
    display: flex;
    justify-content: ${justify};
    align-items: ${align};
    flex-direction: ${direction};
    flex-wrap:${wrap}
  `;
}

export function getTodayDate() {
  const date = new Date();
  const [dayOfWeek, month, day, year] = String(date).split(" ");

  return { year: Number(year), month: MONTH_DICTIONARY.indexOf(month), day: Number(day), dayOfWeek };
}
