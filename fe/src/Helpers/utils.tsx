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

function getFlexTemplate({
  justify = "start",
  align = "stretch",
  direction = "row",
  wrap = "nowrap",
}: flexBoxPropertyType) {
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

export const createKey = (data: string, idx: number) => {
  return `${data}-${idx}`;
};

export const composeProvider = (providers: any) => {
  return providers.reduce((Prev: any, Curr: any) => ({ children }: any) => {
    <Prev>
      <Curr>{children}</Curr>
    </Prev>;
  });
};
