const merge = (left, right) => {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
};

const mergesort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    return merge(mergesort(left), mergesort(right));
};

const sortAscending = (arr) => {
    return mergesort(arr);
};

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

