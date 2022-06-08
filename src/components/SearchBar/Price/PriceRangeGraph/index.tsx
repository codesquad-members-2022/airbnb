import React, { useEffect, useRef, useState } from "react";

import { BUTTON_RADIUS, CANVAS_HEIGHT, CANVAS_WIDTH } from "@constants/constants";
import { usePriceDispatch, PriceTypes, usePriceState } from "@contexts/PriceProvider";

import * as S from "./style";

export const PriceRangeGraph = () => {
  const { priceRange } = usePriceState();
  const { setPriceRange } = usePriceDispatch();

  const [minPrice, setMinPrice] = useState(getInitialMinPrice(priceRange));
  const [maxPrice, setMaxPrice] = useState(getInitialMaxPrice(priceRange));
  const [average, setAverage] = useState(0);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvas = canvasRef.current as HTMLCanvasElement;
  const context = canvas?.getContext("2d");

  const initialMinPrice = Math.min(...mockArray.map(({ x }) => x));
  const initialPricePerPixel =
    (Math.max(...mockArray.map(({ x }) => x)) - Math.min(...mockArray.map(({ x }) => x))) / CANVAS_WIDTH;

  // TODO: 데이터 받아오면 수정할 부분
  useEffect(() => {
    setAverage(getAverage(mockArray) >> 0);
  }, []);

  return (
    <>
      {/* TODO: Description 컴포넌트로 변경 */}
      <div>가격 범위</div>
      <div>
        {minPrice} - {maxPrice}
      </div>
      <div>평균 1박 요금은 {average}원 입니다.</div>
      {/* TODO: Description 컴포넌트로 변경 */}

      <S.GraphContainer>
        <MemoizedGraphCanvas context={context} canvasRef={canvasRef} />
        <Slider
          initialMinPrice={initialMinPrice}
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
          initialPricePerPixel={initialPricePerPixel}
        />{" "}
      </S.GraphContainer>

      <button
        onClick={() => {
          const newPriceRange = { ...priceRange, minPrice: minPrice, maxPrice: maxPrice };
          if (setPriceRange) {
            setPriceRange(newPriceRange);
          }
        }}
      >
        입력
      </button>
    </>
  );
};

type GraphCanvasProps = {
  context: CanvasRenderingContext2D | null;
  canvasRef: React.RefObject<HTMLCanvasElement>;
};

const GraphCanvas = ({ context, canvasRef }: GraphCanvasProps) => {
  drawGraph(context, mockArray);

  return (
    <S.CanvasContainer>
      <canvas width={CANVAS_WIDTH} height={CANVAS_HEIGHT} ref={canvasRef} />
    </S.CanvasContainer>
  );
};

const MemoizedGraphCanvas = React.memo(GraphCanvas);

type SilderProps = {
  initialPricePerPixel: number;
  initialMinPrice: number;
  setMinPrice: React.Dispatch<React.SetStateAction<number>>;
  setMaxPrice: React.Dispatch<React.SetStateAction<number>>;
};

const Slider = ({ initialMinPrice, initialPricePerPixel, setMinPrice, setMaxPrice }: SilderProps) => {
  const { priceRange } = usePriceState();

  const [leftLimit, setLeftLimit] = useState(BUTTON_RADIUS);
  const [rightLimit, setRightLimit] = useState(CANVAS_WIDTH - BUTTON_RADIUS);

  const leftButtonRef = useRef<HTMLButtonElement | null>(null);
  const rightButtonRef = useRef<HTMLButtonElement | null>(null);
  const leftFilterRef = useRef<HTMLDivElement | null>(null);
  const rightFilterRef = useRef<HTMLDivElement | null>(null);
  const posX = useRef(0);

  //remove ghost image
  useEffect(() => {
    removeGhostImage();
  }, []);

  const dragStartHandler = (event: React.DragEvent<HTMLButtonElement>) => {
    if ("clientX" in event) {
      posX.current = event.clientX;
    }

    document.addEventListener("dragover", preventDragEvent);
  };

  const leftButtonDragHandler = (event: React.DragEvent<HTMLButtonElement>) => {
    if (event.currentTarget.offsetLeft < 0) {
      event.currentTarget.style.left = "0px";
    }
    if (event.currentTarget.offsetLeft > rightLimit) {
      event.currentTarget.style.left = rightLimit + "px";
    }
    event.currentTarget.style.left = event.currentTarget.offsetLeft + event.clientX - posX.current + "px";

    posX.current = event.clientX;

    setMinPrice((initialMinPrice + event.currentTarget.offsetLeft * initialPricePerPixel) >> 0);

    if (leftFilterRef.current !== null) {
      leftFilterRef.current.style.width = event.currentTarget.offsetLeft + BUTTON_RADIUS + "px";
    }
  };

  const rightButtonDragHandler = (event: React.DragEvent<HTMLButtonElement>) => {
    if (event.currentTarget.offsetLeft <= leftLimit) {
      event.currentTarget.style.left = leftLimit + "px";
    }
    if (event.currentTarget.offsetLeft >= CANVAS_WIDTH) {
      event.currentTarget.style.left = CANVAS_WIDTH + "px";
    }

    event.currentTarget.style.left = event.currentTarget.offsetLeft + event.clientX - posX.current + "px";

    posX.current = event.clientX;

    setMaxPrice((initialMinPrice + event.currentTarget.offsetLeft * initialPricePerPixel) >> 0);

    if (rightFilterRef.current !== null) {
      rightFilterRef.current.style.width = CANVAS_WIDTH - event.currentTarget.offsetLeft + BUTTON_RADIUS + "px";
    }
  };

  const leftButtonDragEndHandler = (event: React.DragEvent<HTMLButtonElement>) => {
    event.currentTarget.style.left = event.currentTarget.offsetLeft + event.clientX - posX.current + "px";

    posX.current = event.clientX;
    setLeftLimit(event.currentTarget.offsetLeft + BUTTON_RADIUS);
    document.removeEventListener("dragover", preventDragEvent);
  };

  const rightButtonDragEndHandler = (event: React.DragEvent<HTMLButtonElement>) => {
    event.currentTarget.style.left = event.currentTarget.offsetLeft + event.clientX - posX.current + "px";

    posX.current = event.clientX;
    setRightLimit(event.currentTarget.offsetLeft - BUTTON_RADIUS);
    document.removeEventListener("dragover", preventDragEvent);
  };

  useEffect(() => {
    if (
      priceRange &&
      leftButtonRef.current &&
      rightButtonRef.current &&
      leftFilterRef.current &&
      rightFilterRef.current
    ) {
      leftButtonRef.current.style.left = priceRange.minPrice / initialPricePerPixel + "px";
      rightButtonRef.current.style.left = priceRange.maxPrice / initialPricePerPixel + "px";
      leftFilterRef.current.style.width = priceRange.minPrice / initialPricePerPixel + BUTTON_RADIUS + "px";
      rightFilterRef.current.style.width =
        CANVAS_WIDTH - priceRange.maxPrice / initialPricePerPixel + BUTTON_RADIUS + "px";
    }
  }, []);

  return (
    <>
      <S.LeftFilter ref={leftFilterRef} />
      <S.Slider>
        <S.LeftButton
          draggable
          onDragStart={dragStartHandler}
          onDrag={leftButtonDragHandler}
          onDragEnd={leftButtonDragEndHandler}
          ref={leftButtonRef}
        />
        <S.RightButton
          draggable
          onDragStart={dragStartHandler}
          onDrag={rightButtonDragHandler}
          onDragEnd={rightButtonDragEndHandler}
          ref={rightButtonRef}
        />
      </S.Slider>
      <S.RightFilter ref={rightFilterRef} />
    </>
  );
};

const getData = async (url: string) => {
  const data = await fetch(url);

  return data.json();
};

const mockArray = [
  { x: 15000, y: 5 },
  { x: 30000, y: 14 },
  { x: 50000, y: 10 },
  { x: 70000, y: 3 },
  { x: 90000, y: 26 },
  { x: 100000, y: 30 },
  { x: 120000, y: 45 },
  { x: 130000, y: 60 },
  { x: 135000, y: 65 },
  { x: 140000, y: 80 },
  { x: 143000, y: 70 },
  { x: 150000, y: 50 },
  { x: 170000, y: 66 },
  { x: 200000, y: 25 },
  { x: 240000, y: 16 },
  { x: 300000, y: 45 },
  // { x: 320000, y: 10 },
  // { x: 350000, y: 40 },
  // { x: 400000, y: 35 },
  // { x: 600000, y: 30 },
  // { x: 800000, y: 20 },
  // { x: 900000, y: 10 },
  // { x: 1000000, y: 1 },
];

const getInitialMinPrice = (priceRange: PriceTypes | null | undefined): number => {
  if (!priceRange) {
    return Math.min(...mockArray.map(({ x }) => x));
  }
  return priceRange.minPrice;
};

const getInitialMaxPrice = (priceRange: PriceTypes | null | undefined): number => {
  if (!priceRange) {
    return Math.max(...mockArray.map(({ x }) => x));
  }
  return priceRange.maxPrice;
};

interface coordinates {
  x: number;
  y: number;
}

const getAverage = (priceArray: coordinates[]) => {
  const totalAmount = priceArray.map(({ y }) => y).reduce((acc, cur) => acc + cur, 0);
  const totalPrice = priceArray.map(({ x, y }) => x * y).reduce((acc, cur) => acc + cur, 0);

  return totalPrice / totalAmount;
};

const drawGraph = (context: CanvasRenderingContext2D | null, mockArray: coordinates[]) => {
  if (!context) return;
  const x_max = Math.max(...mockArray.map(({ x }) => x));
  const x_min = Math.min(...mockArray.map(({ x }) => x));
  const y_max = Math.max(...mockArray.map(({ y }) => y));
  const x_ratio = (x_max - x_min) / CANVAS_WIDTH;
  const y_ratio = y_max / CANVAS_HEIGHT;
  const coordinates = mockArray.map((coordinate) => {
    return { x: (coordinate.x - x_min) / x_ratio, y: CANVAS_HEIGHT - coordinate.y / y_ratio };
  });

  context.beginPath();
  context.moveTo(coordinates[0].x, CANVAS_HEIGHT);
  context.lineTo(coordinates[0].x, coordinates[0].y); //시작점 처리
  context.strokeStyle = "lightgray";
  context.fillStyle = "black";

  for (let i = 0; i < coordinates.length - 1; i++) {
    const x_mid = (coordinates[i].x + coordinates[i + 1].x) / 2;
    const y_mid = (coordinates[i].y + coordinates[i + 1].y) / 2;
    const cp_x1 = (x_mid + coordinates[i].x) / 2;
    const cp_x2 = (x_mid + coordinates[i + 1].x) / 2;

    context.quadraticCurveTo(cp_x1, coordinates[i].y, x_mid, y_mid);
    context.quadraticCurveTo(cp_x2, coordinates[i + 1].y, coordinates[i + 1].x, coordinates[i + 1].y);

    context.stroke();
  }
  context.lineTo(coordinates[coordinates.length - 1].x, CANVAS_HEIGHT); //끝 점 처리

  context.fill();
};

const removeGhostImage = () => {
  document.addEventListener(
    "dragstart",
    (event) => {
      if (event.dataTransfer) {
        const img = new Image();
        img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=";
        event.dataTransfer.setDragImage(img, 0, 0);
        event.dataTransfer.effectAllowed = "move";
      }
    },
    false,
  );
};

const preventDragEvent = (event: DragEvent) => {
  event.preventDefault();
  return false;
};
