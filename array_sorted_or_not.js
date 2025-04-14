function isSorted(arr)
{
    let count = 1;
    for(let i=1;i<arr.length;i++)
    {
        if(arr[i-1]<arr[i])
        {
            count++;
        }
    }
    console.log(count === arr.length ? "sorted" : "not sorted");

}
isSorted([3,4,5,6]);