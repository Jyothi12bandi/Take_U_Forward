
// Input: n = 4

// Output: 1

// Explanation: There is only 1 digit in 4.

function countDigit(n){
    let s = String(n);
    let result = s.replace(/\D/g,'');

    return result.length;
}

console.log(countDigit(12345));
console.log(countDigit(987));
