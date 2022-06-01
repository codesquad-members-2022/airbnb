import { useRef, useEffect } from 'react';
import styled from 'styled-components';

function BarChart(props) {
  const canvasRef = useRef(null);

  const { data, color, height, width, padding } = props;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    for (let i = 0; i < data.length; i++) {
      const upperLeftCornerX = i * 20;
      const upperLeftCornerY = 0;
      const height = data[i].number;
      const width = 20;

      // ctx.save();
      ctx.fillStyle = { color };
      ctx.fillRect(upperLeftCornerX, upperLeftCornerY, width, height);
      // ctx.restore();
    }
  }, []);

  return <canvas ref={canvasRef} {...props} />;
}

export default BarChart;
