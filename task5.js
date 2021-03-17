function areaOfTriangle(side1, side2, side3) {
	var area, semiPerimeter;
	semiPerimeter = (1 / 2) * (side1 + side2 + side3);
	area = Math.sqrt(
		semiPerimeter *
			(semiPerimeter - side1) *
			(semiPerimeter - side2) *
			(semiPerimeter - side3)
	);
	return area;
}
//function testing
console.log(areaOfTriangle(3, 4, 5));
