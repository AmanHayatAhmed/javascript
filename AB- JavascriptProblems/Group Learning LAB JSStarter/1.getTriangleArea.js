const getTriangleArea = (side1, side2, side3) => {
    const allSide = (side1 + side2 + side3) / 2;
    const area = Math.sqrt(allSide * (allSide - side1) * (allSide - side2) * (allSide - side3));
    return area;

    // The function should return the area of the triangle as a floating-point number.
}

getTriangleArea(5,6,7)

