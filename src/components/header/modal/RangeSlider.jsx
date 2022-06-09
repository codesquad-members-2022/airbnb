import React, {useRef} from "react";
import styled from "styled-components";
import {ReactComponent as PointerIcon} from "../../../assets/pause.svg";
import {usePriceContext} from "../../../contexts/PriceProvider";

const RangeSlider = ({minValue, setMinValue, maxValue, setMaxValue, changePriceRange}) => {
    const {leftPointerPercent, setLeftPointerPercent, rightPointerPercent, setRightPointerPercent} = usePriceContext();

    const width = 465;
    const pointerWidth = 20;

    const leftInput = useRef(null);
    const rightInput = useRef(null);

    const getPercent = (value, width, pointerWidth) => {
        const percent = (value / width) * (width - pointerWidth);

        return percent;
    };

    const moveLeftPointer = (event) => {
        const value = Number(event.target.value);
        const minVal = Math.min(value, maxValue - 1);
        const percent = getPercent(minVal, width, pointerWidth);
        setMinValue(minVal);
        setLeftPointerPercent(percent);
        changePriceRange("min", minVal);
    };

    const moveRightPointer = (event) => {
        const value = Number(event.target.value);
        const maxVal = Math.max(value, minValue + 1);
        const percent = getPercent(maxVal, width, pointerWidth);
        setMaxValue(maxVal);
        setRightPointerPercent(100 - percent);
        changePriceRange("max", maxVal);
    };

    return (
        <>
            <RangeBox>
                <RangeInput
                    ref={leftInput}
                    onChange={moveLeftPointer}
                    type="range"
                    min="0"
                    max="100"
                    value={minValue}
                />
                <RangeInput
                    ref={rightInput}
                    onChange={moveRightPointer}
                    type="range"
                    min="0"
                    max="100"
                    value={maxValue}
                />
            </RangeBox>
            <Slider>
                <LeftPointer percent={leftPointerPercent}>
                    <PointerIcon />
                </LeftPointer>
                <RightPointer percent={rightPointerPercent}>
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
    left: ${({percent}) => `${percent}%`};
`;

const RightPointer = styled(Pointer)`
    right: ${({percent}) => `${percent}%`};
    transform: translate(22px);
`;

export default RangeSlider;
