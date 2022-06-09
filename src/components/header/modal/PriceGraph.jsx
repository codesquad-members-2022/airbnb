import React, {useEffect, useRef} from "react";

const PriceGraph = ({priceData, minValue, maxValue}) => {
    const graphRef = useRef(null);

    useEffect(() => {
        const graph = graphRef.current;
        graph.width = 730;
        graph.height = 200;

        const context = graph.getContext("2d");
        if (context && priceData) {
            drawGraph({context, width: 730, bottom: 200, unit: 100, priceData, minValue, maxValue});
        }
    }, [priceData, minValue, maxValue]);

    return <canvas ref={graphRef}></canvas>;
};

const drawGraph = ({context, width, bottom, unit, priceData, minValue, maxValue}) => {
    const unitOfWidth = width / unit;
    const [minInRange, maxInRange] = [minValue * unitOfWidth, maxValue * unitOfWidth];
    let height = bottom;

    const minPrice = Math.min(...priceData);
    const maxPrice = Math.max(...priceData);
    const unitOfPrice = (maxPrice - minPrice) / unit;

    let range = {min: minPrice, max: minPrice + unitOfPrice};
    startDrawing(context, 0, height, bottom);

    for (let i = 0; i < unit; i++) {
        const currentX = i * unitOfWidth;
        const count = getCount(range, priceData, bottom);
        const cp1x = currentX + unitOfWidth / 2;
        const cp1y = height;
        const cp2x = cp1x;
        const cp2y = bottom - count;
        const targetX = currentX + unitOfWidth;
        const targetY = cp2y;

        endDrawing(context, currentX, bottom);
        changeColor(context, currentX, minInRange, maxInRange);
        startDrawing(context, currentX - 1, height, bottom);
        context.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, targetX, targetY);
        range = {min: range.max, max: range.max + unitOfPrice};
        height = bottom - count;
    }

    endDrawing(context, width, bottom);
};

const startDrawing = (context, x, y, bottom) => {
    context.beginPath();
    context.moveTo(x, bottom);
    context.lineTo(x, y);
};

const endDrawing = (context, x, bottom) => {
    context.lineTo(x, bottom);
    context.fill();
};

const isValueInRange = (value, min, max) => {
    return min <= value && value <= max;
};

const changeColor = (context, value, min, max) => {
    const color = {
        out: "#E5E5E5",
        in: "#333333",
    };

    if (isValueInRange(value, min, max)) {
        context.fillStyle = color.in;
        context.strokeStyle = color.in;
    } else {
        context.fillStyle = color.out;
        context.strokeStyle = color.out;
    }
};

const getCount = (range, priceData, bottom) => {
    let count = priceData.filter((price) => range.min < price && price <= range.max).length;
    count *= 20;
    if (count > bottom) {
        count = bottom;
    }

    return count;
};

export default PriceGraph;
