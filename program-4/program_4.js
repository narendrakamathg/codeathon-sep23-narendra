const sortAscending = (arr) => {
    return arr.sort((a, b) => a - b);
}

// Example usage:
const unsortedArr = [100,180,260,310,40,535,695];
const sortedArr = sortAscending(unsortedArr);
console.log(sortedArr);
const unsortedArr1 = [1,2,3,4,5,6,7,8,9,10];
const sortedArr1 = sortAscending(unsortedArr1);
console.log(sortedArr1);
const unsortedArr2 = [10,9,8,7,6,5,4,3,2,1];
const sortedArr2 = sortAscending(unsortedArr2);
console.log(sortedArr2);

