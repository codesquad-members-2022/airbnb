function moneyToWon(money: number) {
  const newMoney = String(Math.floor(money));
  const moneyArr: string[] = Array.from(newMoney);
  const newArr: string[] = [];
  let count = 0;
  for (let i = moneyArr.length - 1; i >= 0; i -= 1) {
    newArr.unshift(moneyArr[i]);
    count += 1;
    if (count === 3 && i !== 0) {
      newArr.unshift(',');
      count = 0;
    }
  }

  return `￦${newArr.join('')}`;
}

function recursion(number: number, compareNum: number, plusNum: number) {
  if (number >= compareNum) {
    return number;
  }
  return recursion(number + plusNum, compareNum, plusNum);
}

export { moneyToWon, recursion };
