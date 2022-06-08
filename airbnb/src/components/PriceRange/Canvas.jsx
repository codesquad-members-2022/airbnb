import { useRef, useEffect } from 'react';

function BarChart(props) {
  const canvasRef = useRef(null);
  const CANVAS_WIDTH = 300;
  const CANVAS_HEIGHT = 150;

  const { data } = props;

  const draw = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    for (let i = 0; i < data.length; i++) {
      const positionX = i * (CANVAS_WIDTH / data.length);
      const positionY = CANVAS_HEIGHT;
      const graphWidth = CANVAS_WIDTH / data.length;
      const graphHeight = data[i].number * -1;
      ctx.fillStyle =
        'rgb(' +
        0 +
        ', ' +
        Math.floor(255 - 15 * i) +
        ',' +
        Math.floor(255 - 4.25 * i) +
        ')';
      ctx.fillRect(positionX, positionY, graphWidth, graphHeight);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    if (canvas) {
      canvas.width = CANVAS_WIDTH;
      canvas.height = CANVAS_HEIGHT;
      draw();
    }
  }, []);

  return (
    <>
      <canvas ref={canvasRef} />
    </>
  );
}

export default BarChart;
