function palindrome(s,left = 0,right=s.length-1)
{
    if(left >= right) return true;
    if(s[left]!==s[right])  return false;
    return palindrome(s,left+1,right-1);
}
console.log(palindrome("madam"));//true
console.log(palindrome("dog"));//false