function isPalindrome(n) {
    let ans = n;
    let result = 0;
    while(n > 0)
    {
        let rem = n%10;
        result = (result *10)+rem;
        n = Math.floor(n/10);
    }
    // console.log(result);
    return result === ans ? true:false;

}
console.log(isPalindrome(121));