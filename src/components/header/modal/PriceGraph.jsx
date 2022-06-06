import React, {useEffect, useRef} from "react";

const PriceGraph = ({priceData}) => {
    const graphRef = useRef(null);

    useEffect(() => {
        const graph = graphRef.current;
        graph.width = 730;
        graph.height = 200;

        const context = graph.getContext("2d");
        if (context && priceData) {
            drawGraph({context, width: 730, bottom: 200, unit: 10, priceData});
        }
    }, [priceData]);

    return <canvas ref={graphRef}></canvas>;
};

const drawGraph = ({context, width, bottom, unit, priceData}) => {
    const unitOfWidth = Math.floor(width / unit);
    let height = bottom;

    const minPrice = Math.min(...priceData);
    const maxPrice = Math.max(...priceData);
    const unitOfPrice = (maxPrice - minPrice) / unit;

    let range = {min: 0, max: minPrice};

    context.beginPath();
    context.moveTo(0, bottom);
    for (let i = 0; i < unit; i++) {
        const currentX = i * unitOfWidth;
        const count = getCount(range, priceData, bottom);
        const xOfControlPoint1 = currentX + unitOfWidth / 2;
        const yOfControlPoint1 = height;
        const xOfControlPoint2 = xOfControlPoint1;
        const yOfControlPoint2 = bottom - count;
        const targetX = currentX + unitOfWidth;
        const targetY = yOfControlPoint2;
        context.bezierCurveTo(xOfControlPoint1, yOfControlPoint1, xOfControlPoint2, yOfControlPoint2, targetX, targetY);

        range = {min: range.max, max: range.max + unitOfPrice};
        height = bottom - count;
    }
    context.fillStyle = "#010101";
    context.lineTo(width, bottom);
    context.fill();
    context.stroke();
    context.closePath();
};

const getCount = (range, priceData, bottom) => {
    let count = priceData.filter((price) => range.min < price && price <= range.max).length;
    count *= 4;
    if (count > bottom) {
        count = bottom;
    }

    return count;
};

export default PriceGraph;
