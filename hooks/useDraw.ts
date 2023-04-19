import { useEffect, useRef } from 'react';

export const useDraw = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      console.log({ x: e.clientX, y: e.clientY });
      const currentPoint = computePointInCanvas(e);

      const context = canvasRef.current?.getContext('2d');
      if (!context || !currentPoint) return;
    };

    const computePointInCanvas = (e: MouseEvent) => {
      const canvas = canvasRef.current;

      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      return { x, y };
    };

    // add event listners
    canvasRef.current?.addEventListener('mousemove', handler);

    // remove event listners
    // clean up
    return () => canvasRef.current?.addEventListener('mousemove', handler);
  }, []);
  return { canvasRef };
};
