function areaOfTriangle(x, y, z) {
    var area, semiPerimeter;
    semiPerimeter = (1 / 2) * (x + y + z);
    area = Math.sqrt(semiPerimeter * (semiPerimeter - x) * (semiPerimeter - y) * (semiPerimeter - z));
    return area;
}
//function testing
console.log(areaOfTriangle(3, 4, 5));