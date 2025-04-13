function printName(n,s)
{
    if(n===0)
    {
        return;
    }
    console.log(s);
    printName(n-1,s);
}
printName(5,"jyothi");