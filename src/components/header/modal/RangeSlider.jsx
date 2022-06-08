import React, {useState, useRef} from "react";
import styled from "styled-components";
import {ReactComponent as PointerIcon} from "../../../assets/pause.svg";

const RangeSlider = () => {
    const min = 0;
    const max = 100;
    const width = 465;
    const pointerWidth = 20;

    const leftInput = useRef(null);
    const rightInput = useRef(null);
    const leftPointer = useRef(null);
    const rightPointer = useRef(null);

    const [minValue, setMinValue] = useState(min);
    const [maxValue, setMaxValue] = useState(max);

    const moveLeftPointer = (event) => {
        const value = Number(event.target.value);
        const minVal = Math.min(value, maxValue - 1);
        const percent = (minVal / width) * (width - pointerWidth);
        setMinValue(minVal);
        leftPointer.current.style.left = `${percent}%`;
    };

    const moveRightPointer = (event) => {
        const value = Number(event.target.value);
        const maxVal = Math.max(value, minValue + 1);
        const percent = (maxVal / width) * (width - pointerWidth);
        setMaxValue(maxVal);
        rightPointer.current.style.right = `${100 - percent}%`;
    };

    return (
        <>
            <RangeBox>
                <RangeInput
                    ref={leftInput}
                    onChange={moveLeftPointer}
                    type="range"
                    min={min}
                    max={max}
                    value={minValue}
                />
                <RangeInput
                    ref={rightInput}
                    onChange={moveRightPointer}
                    type="range"
                    min={min}
                    max={max}
                    value={maxValue}
                />
            </RangeBox>
            <Slider>
                <LeftPointer ref={leftPointer}>
                    <PointerIcon />
                </LeftPointer>
                <RightPointer ref={rightPointer}>
                    <PointerIcon />
                </RightPointer>
            </Slider>
        </>
    );
};

const RangeBox = styled.div`
    position: relative;
`;

const RangeInput = styled.input`
    position: absolute;
    width: 100%;
    z-index: 2;
    opacity: 0;
    top: -25px;
    transform: translate(0px, -10px);
    -webkit-appearance: none;
    pointer-events: none;
    ::-webkit-slider-thumb {
        width: 20px;
        height: 30px;
        border-radius: 0;
        border: 0 none;
        background-color: red;
        z-index: 2;
        -webkit-appearance: none;
        pointer-events: all;
    }
`;

const Slider = styled.div`
    position: relative;
    z-index: 1;
`;

const Pointer = styled.div`
    position: absolute;
    width: 20px;
    height: 20px;
    top: -40px;
    background-color: ${({theme}) => theme.color.white};
    border-radius: 999px;
    z-index: 2;
`;

const LeftPointer = styled(Pointer)`
    left: 0%;
`;

const RightPointer = styled(Pointer)`
    right: 0%;
    transform: translate(22px);
`;

export default RangeSlider;
