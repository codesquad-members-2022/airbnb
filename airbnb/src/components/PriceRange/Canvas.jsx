import { useRef, useEffect } from 'react';
import styled from 'styled-components';
// const myCanvas = canvasRef.current;

// const useCanvas = (callback) => {
//   const canvasRef = useRef(null);

//   (useEffect = () => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     callback([canvas, ctx]);
//   }),
//     [];
// };

// function drawLine(ctx, startX, startY, endX, endY, color) {
//   ctx.save();
//   ctx.strokeStyle = color;
//   ctx.beginPath();
//   ctx.moveTo(startX, startY);
//   ctx.lineTo(endX, endY);
//   ctx.stroke();
//   ctx.restore();
// }

// function drawBar(
//   ctx,
//   upperLeftCornerX,
//   upperLeftCornerY,
//   width,
//   height,
//   color,
// ) {
//   ctx.save();
//   ctx.fillStyle = color;
//   ctx.fillRect(upperLeftCornerX, upperLeftCornerY, width, height);
//   ctx.restore();
// }

function Barchart(props) {
  const canvasRef = useRef(null);

  const { data, color, height, width, padding } = props;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    for (let i = 0; i < data.length; i++) {
      console.log(data[i]);

      const upperLeftCornerX = 0;
      const upperLeftCornerY = data[i].number;
      const height = data[i].number;
      const width = data.length;

      ctx.save();
      ctx.fillStyle = { color };
      ctx.fillRect(upperLeftCornerX, upperLeftCornerY, width, height);
      ctx.restore();
    }
  }, []);

  return <canvas ref={canvasRef} {...props} />;
}

export default Barchart;
