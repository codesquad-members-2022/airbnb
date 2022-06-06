import { useRef, useEffect } from 'react';
import styled from 'styled-components';

function BarChart(props) {
  const canvasRef = useRef(null);

  const { data, color, height, width, padding } = props;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < data.length; i++) {
      const upperLeftCornerX = i * 20;
      const upperLeftCornerY = 100;
      const height = data[i].number;
      const width = 20;

      ctx.fillStyle =
        'rgb(' + '255' + ', ' + Math.floor(255 - 42.5 * i) + ', 0)';
      ctx.fillRect(upperLeftCornerX, upperLeftCornerY, width, height * -1);
      console.log(
        'upperLeftCornerX' + upperLeftCornerX,
        'upperLeftCornerY' + upperLeftCornerY,
        'width' + width,
        'height' + height,
      );
    }
  }, []);

  return <canvas ref={canvasRef} {...props} />;
}

export default BarChart;
