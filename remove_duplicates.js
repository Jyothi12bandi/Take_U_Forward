function removeDuplicate(arr)
{
    let result = arr.reduce((res,i)=>{
        res.add(i);
        return res;
    },new Set());
    console.log([...result]);
}
removeDuplicate([1,2,2,0,5,3,1,3]);//[1,2,0,5.3];