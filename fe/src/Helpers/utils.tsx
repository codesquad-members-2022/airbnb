import { MONTH_DICTIONARY } from "./constant";
import { FlexBoxPropertyType, FlexType } from "Helpers/interface";

export function applyFlex({ flex, justify, align, direction, wrap, grow }: FlexType) {
  return (
    flex &&
    `${getFlexTemplate({ justify, align, direction, wrap, grow })}
    `
  );
}

function getFlexTemplate({
  justify = "start",
  align = "stretch",
  direction = "row",
  wrap = "nowrap",
  grow = "0",
}: FlexBoxPropertyType) {
  return `
    display: flex;
    justify-content: ${justify};
    align-items: ${align};
    flex-direction: ${direction};
    flex-wrap:${wrap}
    flex-grow:${grow}
  `;
}

export function getTodayDate() {
  const date = new Date();
  const [dayOfWeek, month, day, year] = String(date).split(" ");

  return { year: Number(year), month: MONTH_DICTIONARY.indexOf(month), day: Number(day), dayOfWeek };
}

export const createKey = (data: string, idx: number) => {
  return `${data}-${idx}`;
};

export const composeProvider = (providers: any) => {
  return providers.reduce((Prev: any, Curr: any) => ({ children }: any) => {
    return (
      <Prev>
        <Curr>{children}</Curr>
      </Prev>
    );
  });
};
