function smallerElement(arr)
{
    let result = arr.reduce((min,i)=>{
        if(i<min)
        {
            min=i;
        }
        return min;
    },0);
    console.log(result);
}
smallerElement([3,2,6,4,1,0]);