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

export const getRandomNumber = (minNum: number, maxNum: number) => {
  return Math.round(Math.random() * (maxNum - minNum) + minNum);
};

export const getWonTemplate = (num: number) => `${num.toLocaleString()}원`;

export async function fetchData(url: string, { method, bodyData }: any = {}) {
  const headers = {
    "Content-Type": "application/json; charset=utf-8",
    accessToken:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqd3RUb2tlbiIsImlkIjoiNiIsImV4cCI6MTY1NDgzMDAxNn0.oOS0hGyvcnFbPNleaxcf0A57bYjDc01JtJZVwIed2wc",
  };
  const body = JSON.stringify(bodyData);
  const fetchParams = { method, headers, body };
  try {
    const data = await fetch(url, fetchParams);
    return data.json();
  } catch (error) {
    console.error(error);
    return error;
  }
}
