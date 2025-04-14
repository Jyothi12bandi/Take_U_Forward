function largestElement(arr)
{
    let max = -Infinity;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i] > max)
        {
            max = arr[i];
        }
    }
    console.log(max);
}
largestElement([3,1,2,7,5]);