let str = String(prompt("Vui lòng nhập các số cách nhau bởi dấu ',': "));
let arr = str.split(',');
let sum = 0;
for(let j = 0; j < arr.length; j++)
{
    sum += Number(arr[j]);
}
alert(`Tổng của các số là: ${sum}`);    