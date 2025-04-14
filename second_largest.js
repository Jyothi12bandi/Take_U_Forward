function secondLargest(arr)
{
    let result = arr.reduce(([max,smax],i)=>{
        if(i>max)
        {
            smax=max;
            max=i;
        }
        else if(i>smax && i!=max)
        {
            smax=i;
        }
        return [max,smax];
    },[0,0]);
    console.log(result[1]);
}
secondLargest([2,0,1,5,4,7]);