/* eslint-disable no-debugger */
import React, { Children, DragEventHandler, MouseEventHandler, useCallback, useEffect, useRef, useState } from "react";

import PAUSE_ICON from "@assets/pause-icon.svg";
import X_ICON from "@assets/x-icon.svg";
import Icon from "@components/common/Icon";
import Modal from "@components/common/Modal";
import TextBox from "@components/common/TextBox";
import { ModalList } from "@constants/calendar";
import { ModalOpenType } from "@utils/calendar";

import * as S from "./style";

interface coordinates {
  x: number;
  y: number;
}

const Price = ({ modalOpen, setModalOpen }: ModalOpenType) => {
  const priceElement = useRef(null);

  const handleModal = () => {
    setModalOpen(ModalList.PRICE);
  };

  return (
    <>
      <S.Price onClick={handleModal} ref={priceElement}>
        {/* <TextBox label={`요금`} placeholders={`금액대 설정`} text={null} /> */}
        <TextBox label={`요금`} placeholder={`금액대 설정`} textContent={null} />
        <Icon iconName={X_ICON} iconSize={"base"} />
      </S.Price>
      {modalOpen === ModalList.PRICE && (
        <Modal setModalOpen={setModalOpen} containElement={priceElement}>
          <PriceRangeGraph />
        </Modal>
      )}
    </>
  );
};

const PriceRangeGraph = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [average, setAverage] = useState(0);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvas = canvasRef.current as HTMLCanvasElement;
  const context = canvas?.getContext("2d");
  //데이터 받는 로직 임시 주석화
  // const priceArray: number[] = [];

  // const roomsData = getData("fakeDB.json").then((json) => {
  //   json.rooms.forEach((room: { salePrice: number }) => {
  //     priceArray.push(room.salePrice);
  //   });
  //   priceArray.sort((a: number, b: number) => a - b);
  //   setMinPrice(priceArray[0]);
  //   setMaxPrice(priceArray[priceArray.length - 1]);
  //   setAverage(
  //     priceArray.reduce((acc: number, cur: number) => {
  //       return acc + cur;
  //     }, 0) / priceArray.length,
  //   );
  // });

  const [pricePerPixel, setPricePerPixel] = useState(0);
  //TODO: 데이터 받아오면 수정할 부분
  useEffect(() => {
    if (minPrice === 0 || maxPrice === 0 || average === 0) {
      setMinPrice(Math.min(...mockArray.map(({ x }) => x)));
      setMaxPrice(Math.max(...mockArray.map(({ x }) => x)));
      setAverage(getAverage(mockArray) >> 0);
      setPricePerPixel((Math.max(...mockArray.map(({ x }) => x)) - Math.min(...mockArray.map(({ x }) => x))) / 365);
    }
  }, []);

  drawGraph(context, mockArray);

  return (
    <>
      <div>
        {/* TODO: Description 컴포넌트로 변경 */}
        <div>가격 범위</div>
        <div>
          {minPrice} - {maxPrice}
        </div>
        <div>평균 1박 요금은 {average}원 입니다.</div>
        {/* TODO: Description 컴포넌트로 변경 */}
        <S.GraphContainer>
          <S.CanvasContainer>
            <canvas width="365" height="100" ref={canvasRef} />
          </S.CanvasContainer>
          <Slider setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} pricePerPixel={pricePerPixel} />
        </S.GraphContainer>
      </div>
    </>
  );
};

type SilderProps = {
  pricePerPixel: number;
  setMinPrice: React.Dispatch<React.SetStateAction<number>>;
  setMaxPrice: React.Dispatch<React.SetStateAction<number>>;
};
// let posX = 0;
const Slider = ({ setMinPrice, setMaxPrice, pricePerPixel }: SilderProps) => {
  const [leftLimit, setLeftLimit] = useState(12);
  const [rightLimit, setRightLimit] = useState(353);
  const leftRef = useRef<HTMLButtonElement>(null);
  const leftFilterRef = useRef<HTMLDivElement | null>(null);
  const posX = useRef(0);

  //remove ghost image
  useEffect(() => {
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
  }, []);

  const dragStartHandler = (event: React.DragEvent<HTMLButtonElement>) => {
    if ("clientX" in event) {
      posX.current = event.clientX;
    }

    document.addEventListener("dragover", preventDragEvent);
  };

  const preventDragEvent = (event: DragEvent) => {
    event.preventDefault();
    return false;
  };

  const leftButtonDragHandler = (event: React.DragEvent<HTMLButtonElement>) => {
    if (event.currentTarget.offsetLeft < 0) {
      event.currentTarget.style.left = "0px";
    }
    if (event.currentTarget.offsetLeft > rightLimit) {
      event.currentTarget.style.left = rightLimit + "px";
    }
    // console.log(event.currentTarget.offsetLeft);
    event.currentTarget.style.left = event.currentTarget.offsetLeft + event.clientX - posX.current + "px";

    posX.current = event.clientX;

    setMinPrice((15000 + event.currentTarget.offsetLeft * pricePerPixel) >> 0);

    if (leftFilterRef.current !== null) {
      leftFilterRef.current.style.width = event.currentTarget.offsetLeft + 12 + "px";
    }
  };

  const rightButtonDragHandler = (event: React.DragEvent<HTMLButtonElement>) => {
    if (event.currentTarget.offsetLeft <= leftLimit) {
      event.currentTarget.style.left = leftLimit + "px";
    }
    if (event.currentTarget.offsetLeft >= 365) {
      event.currentTarget.style.left = "365px";
    }

    event.currentTarget.style.left = event.currentTarget.offsetLeft + event.clientX - posX.current + "px";

    posX.current = event.clientX;

    setMaxPrice((15000 + event.currentTarget.offsetLeft * pricePerPixel) >> 0);
  };

  const leftButtonDragEndHandler = (event: React.DragEvent<HTMLButtonElement>) => {
    event.currentTarget.style.left = event.currentTarget.offsetLeft + event.clientX - posX.current + "px";

    posX.current = event.clientX;
    setLeftLimit(event.currentTarget.offsetLeft + 12);
    document.removeEventListener("dragover", preventDragEvent);
  };

  const rightButtonDragEndHandler = (event: React.DragEvent<HTMLButtonElement>) => {
    event.currentTarget.style.left = event.currentTarget.offsetLeft + event.clientX - posX.current + "px";

    posX.current = event.clientX;
    setRightLimit(event.currentTarget.offsetLeft - 12);
    document.removeEventListener("dragover", preventDragEvent);
  };

  return (
    <>
      <S.LeftFilter ref={leftFilterRef} />
      <S.Slider>
        <S.LeftButton
          ref={leftRef}
          draggable
          onDragStart={dragStartHandler}
          onDrag={leftButtonDragHandler}
          onDragEnd={leftButtonDragEndHandler}
        />
        <S.RightButton
          draggable
          ref={leftRef}
          onDragStart={dragStartHandler}
          onDrag={rightButtonDragHandler}
          onDragEnd={rightButtonDragEndHandler}
        />
      </S.Slider>
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
  { x: 320000, y: 10 },
  // { x: 350000, y: 40 },
  // { x: 400000, y: 35 },
  // { x: 600000, y: 30 },
  // { x: 800000, y: 20 },
  // { x: 900000, y: 10 },
  // { x: 1000000, y: 1 },
];

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
  const x_ratio = (x_max - x_min) / 365; //canvas width
  const y_ratio = y_max / 100; //canvas height
  const coordinates = mockArray.map((coordinate) => {
    return { x: (coordinate.x - x_min) / x_ratio, y: 100 - coordinate.y / y_ratio };
  });

  context.beginPath();
  context.moveTo(coordinates[0].x, 100); //(최소가격, height)
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
  context.lineTo(coordinates[coordinates.length - 1].x, 100); //끝 점 처리

  context.fill();
};

export default Price;
