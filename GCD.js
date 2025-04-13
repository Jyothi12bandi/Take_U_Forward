function GCD(n1, n2) {
    let min=0;
    if(n1>n2)
    {
        min = n2;
    }
    else{
        min = n1;
    }
    for(let i=min;i>0;i--)
    {
        if(n1%i===0 && n2 %i===0)
        {
            return i;
        }
    }
    return 1;
}
console.log(GCD(6,4));
