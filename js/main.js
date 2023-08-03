const subArrays = [
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
];

const largestOfFour = [];

for (let i = 0; i < subArrays.length; i++) {
    let maxValue = subArrays[i][0];

for (let j = 1; j < subArrays[i].length; j++) {
    if (subArrays[i][j] > maxValue) {
    maxValue = subArrays[i][j];
    }
}

largestOfFour.push(maxValue);
}

console.log(largestOfFour);