let arr=[2,1,3,1,2,0,4];
let result = arr.reduce((map,ele)=>{
    if(map.has(ele))
    {
        map.set(ele,map.get(ele)+1);
    }
    else{
        map.set(ele,1);
    }
    return map;
},new Map());

let output = "";
for(let [key,value] of result)
{
    output += `${key} - ${value}, \n`;
}

console.log(output);