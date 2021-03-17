function areaOfTriangle(x, y, z) {
	var area, SP; //SemiPerimeter
	SP = (1 / 2) * (x + y + z);
	area = Math.sqrt(SP * (SP - x) * (SP - y) * (SP - z));
	return area;
}
//function testing
console.log(areaOfTriangle(3, 4, 5));
