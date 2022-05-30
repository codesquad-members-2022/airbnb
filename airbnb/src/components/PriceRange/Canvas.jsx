import { useRef, useEffect, canvasRef } from 'react';
const myCanvas = canvasRef.current;
const sampleData = {
  price5: 1000,
  price4: 2000,
  price3: 3000,
  price2: 10000,
  price1: 20000,
};

// const useCanvas = (callback) => {
//   const canvasRef = useRef(null);

//   (useEffect = () => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     callback([canvas, ctx]);
//   }),
//     [];
// };

function drawLine(ctx, startX, startY, endX, endY, color) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.stroke();
  ctx.restore();
}

function drawBar(
  ctx,
  upperLeftCornerX,
  upperLeftCornerY,
  width,
  height,
  color,
) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.fillRect(upperLeftCornerX, upperLeftCornerY, width, height);
  ctx.restore();
}

function Barchart(input) {
  const options = input;
  const canvas = options.canvas;
  const ctx = canvas.getContext('2d');
  const colors = options.colors;

  const drawBarChart = () => {
    let maxValue = 0;
    for (const categ in options.data) {
      maxValue = Math.max(maxValue, options.data[categ]);
    }
    const actualHeight = canvas.height - options.padding * 2;
    const actualWidth = canvas.width - options.padding * 2;

    let gridValue = 0;
    while (gridValue <= maxValue) {
      const gridY = actualHeight * (1 - gridValue / maxValue) + options.padding;
      drawLine(ctx, 0, gridY, canvas.width, gridY, options.gridColor);

      ctx.save();
      ctx.fillStyle = options.gridColor;
      ctx.textBaseline = 'bottom';
      ctx.font = 'bold 10px Arial';
      ctx.fillText(gridValue, 10, gridY - 2);
      ctx.restore();

      gridValue += options.gridScale;
    }

    const barIndex = 0;
    const numberOfBars = Object.keys(options.data).length;
    const barSize = actualWidth / numberOfBars;

    for (const categ in options.data) {
      const val = options.data[categ];
      const barHeight = Math.round((actualHeight * val) / maxValue);
      drawBar(
        this.ctx,
        this.options.padding + barIndex * barSize,
        this.canvas.height - barHeight - this.options.padding,
        barSize,
        barHeight,
        this.colors[barIndex % this.colors.length],
      );
      barIndex++;
    }
  };

  // const barChartContent = (x, y, w, h, fill) => {
  //   ctx.fillStyle = '#000000';
  //   ctx.beginPath();
  //   ctx.fillRect(10, 10, 150, 100);
  //   ctx.fill();
  // };

  // useEffect(() => {
  //   drawBar(context);
  // }, [drawBar]);

  // return <canvas ref={canvasRef} {...props} />;
}

const myBarchart = new Barchart({
  canvas: myCanvas,
  seriesName: 'Vinyl records',
  padding: 20,
  gridScale: 5,
  gridColor: '#eeeeee',
  data: sampleData,
  colors: ['#a55ca5', '#67b6c7', '#bccd7a', '#eb9743'],
});

export default myBarchart;
