let str = String(prompt("Vui lòng nhập họ tên cách nhau bởi ',': "));
let arr = str.split(',');
for(let j = 0; j < arr.length; j++)
{
    arr[j] = `<${arr[j]}>`;   
}
alert(`${str} => ${arr} `)    