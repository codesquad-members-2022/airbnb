import { useEffect, useRef } from 'react';

interface useCanvasTypes {
  canvasWidth: number;
  canvasHeight: number;
  animate: (ctx: CanvasRenderingContext2D) => void;
}

const useCanvas = ({ canvasWidth, canvasHeight, animate }: useCanvasTypes) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    const setCanvas = () => {
      const devicePixelRatio = window.devicePixelRatio ?? 1;
      if (canvas && ctx) {
        canvas.style.width = `${canvasWidth}px`;
        canvas.style.height = `${canvasHeight}px`;

        canvas.width = canvasWidth * devicePixelRatio;
        canvas.height = canvasHeight * devicePixelRatio;

        ctx.scale(devicePixelRatio, devicePixelRatio);
      }
    };
    setCanvas();

    if (ctx) {
      animate(ctx);
    }
  }, [canvasWidth, canvasHeight]);

  return canvasRef;
};

export default useCanvas;
