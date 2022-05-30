import React, { useRef, useEffect, canvasRef } from 'react';
const canvas = canvasRef.current;
const context = canvas.getContext('2d');

function drawLine(ctx, startX, startY, endX, endY, color) {
  ctx.save(),
    (ctx.strokeStyle = color),
    ctx.beginPath(),
    ctx.moveTo(startX, startY),
    ctx.lineTo(endX, endY),
    ctx.stroke(),
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
  ctx.save(),
    (ctx.fillStyle = color),
    ctx.fillRect(upperLeftCornerX, upperLeftCornerY, width, height),
    ctx.restore();
}

const sampleData = {
  'Classical music': 10,
  'Alternative rock': 14,
  'Pop music': 2,
  'Jazz music': 12,
};

const Canvas = ({ props }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    drawLine(context);
  }, [drawLine]);

  return <canvas ref={canvasRef} {...props} />;
};

export default Canvas;
