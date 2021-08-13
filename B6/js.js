let str = String(prompt("Vui lòng nhập số cách nhau bởi ',': "));
let arr = str.split(',');
let arr2 = [];
for(let j = 0; j < arr.length; j++)
{
    let x = Number(arr[j]);
    if(x % 2 != 0)
    arr2.push(` ${x}`);
}
alert(`${arr} => ${arr2}`)    