const canvas = document.querySelector('#test');
const ctx = canvas.getContext('2d');

// bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
const XcountAmounts = 10;
const oneXCellLength = Math.floor(canvas.width / XcountAmounts);
const bezierCurveHalfLength = Math.floor(oneXCellLength / 2);
ctx.fillStyle = 'rgb(200,0,0)';
ctx.strokeStyle = 'transparent';

const prices = [
  150000, 30000, 100000, 41240, 55000, 200000, 250000, 140000, 40000, 50000,
  65200, 53220, 242300, 131000, 45630, 143400, 232400, 280000, 41250, 64500,
  53453, 123100, 67457, 234230, 23233, 53200, 70000, 90000, 10000, 20000,
  100000, 200000, 90000, 130000, 190000, 200000, 40000, 13000, 63460, 30000,
  242000, 30000, 20000, 50000, 30000, 60000, 70000, 10000, 120000, 60000,
  230000, 100000, 190000, 200000, 400000, 300000, 320000,
];

const productsAmount = prices.length;

const higherPrice = Math.max(...prices);

const lowerPrice = Math.min(...prices);

function getCount(curr, next) {
  const test = prices.filter(price => price >= curr && price < next);
  return test.length;
}

const standardPrices = Array.from({ length: XcountAmounts }, (_, idx) => {
  const standard = idx * Math.floor(higherPrice / XcountAmounts);
  const nextStandar = (idx + 1) * Math.floor(higherPrice / XcountAmounts);
  const count = getCount(standard, nextStandar);
  return { price: [`${standard}`], count };
});

const oneYCellLength = Math.floor(
  canvas.height / (Math.max(...standardPrices.map(v => v.count)) + 2),
);

function getCurveLength(lastX, lastY, currentY) {
  const currentHalfLength = lastX + bezierCurveHalfLength;
  const currentLength = lastX + oneXCellLength;
  return [
    currentHalfLength,
    lastY,
    currentHalfLength,
    currentY,
    currentLength,
    currentY,
  ];
}
// TODO: 로직 에러 수정 필요
ctx.beginPath();
ctx.moveTo(0, 400); // 시작점
ctx.bezierCurveTo(...getCurveLength(0, 400, standardPrices[0].count));
// 시작점 -> 첫 BP점 -> 두번째 BP점 -> 끝점
// ctx.lineTo(100, 360);
ctx.bezierCurveTo(...getCurveLength(40, 190, standardPrices[1].count));
// ctx.lineTo(150, 100);
ctx.bezierCurveTo(...getCurveLength(80, 361, standardPrices[2].count));
// ctx.lineTo(200, 200);
ctx.bezierCurveTo(...getCurveLength(120, 95, standardPrices[3].count));
// ctx.lineTo(250, 220);
ctx.bezierCurveTo(...getCurveLength(160, 133, standardPrices[4].count));
// ctx.lineTo(300, 200);
ctx.bezierCurveTo(...getCurveLength(200, 38, standardPrices[5].count));
// ctx.lineTo(350, 170);
ctx.bezierCurveTo(...getCurveLength(240, standardPrices[6].count));
// ctx.lineTo(400, 400); // 마지막
ctx.bezierCurveTo(375, 170, 375, 400, 400, 400);
ctx.fill();
ctx.stroke();

// 로직 아이디어
// 기준점을 얼마나 잡을것인가? -> 임의로 정한다 ex) 우리는 20개의 점으로 간다
// 임의 기준으로 정한 가격정보 보다 높거나 낮음으로 숙소의 갯수를 구하고 높이를 만든다.(높이는 가장 높은 숙소 갯수 보다 임의적으로 크게?)\
// 이제 재밌게 만든다...
// 이동량은 구할수 있으니 사실 몇개로 나눌지와 숙소 갯수만 있으면 될것 같다. 선을 만드는 로직은 함수 하나로도
// 가능할것 같은데 배열을 리턴하게하고 리턴한 배열을 스프레드 문법으로 꺼내서 사용해보는걸 목표로 해보고싶다.
