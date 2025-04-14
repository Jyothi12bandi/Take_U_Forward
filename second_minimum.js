function secondMinimum(arr)
{
    let result = arr.reduce(([min,smin],i) =>{
        if(i<min)
        {
            smin = min;
            min = i;
        }
        else if(i<smin && i!=min)
        {
            smin=i;
        }
        return [min,smin];
    },[Infinity,Infinity]);
    console.log(result[1]);
}
secondMinimum([4,2,1,0,-1,3]);