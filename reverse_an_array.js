
function reverseArray(arr, n = arr.length) {
    if (n === 0) return [];
    return [arr[n - 1], ...reverseArray(arr, n - 1)];
}

let arr = [5, 3, 2, 1, 0];
console.log(reverseArray(arr)); // Output: [0, 1, 2, 3, 5]