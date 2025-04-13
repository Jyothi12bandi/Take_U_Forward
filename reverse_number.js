// Input: n = 25

// Output: 52

// Explanation: Reverse of 25 is 52.

function reverseNumber(n){
    let isNegative = n<0;
    let ans = Math.abs(n);
    let num = 0;
    while(ans > 0)
    {
        let rem = ans %10;
        num = ((num*10) + rem); 
        ans = Math.floor(ans/10);
    }
    
    if(isNegative)
    {
        num = -num;
    }
    console.log(num);  
}
reverseNumber(-45678);