const numToWon = (num: number) => {
  return num.toLocaleString();
};

const getEllipisisStyle = (lineNumber: number) => {
  return {
    overflow: "hidden",
    textOverflow: "ellipsis",
    WebkitLineClamp: lineNumber.toString(),
    width: "100%",
  };
};

const getFormattedDate = (dateString: string): string => {
  const date = new Date(dateString);

  return `${date.getMonth() + 1}월 ${date.getDate()}일`;
};

export { numToWon, getEllipisisStyle, getFormattedDate };
