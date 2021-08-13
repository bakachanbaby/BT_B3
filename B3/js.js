let str = String(prompt("Vui lòng nhập các số cách nhau bởi dấu ',': "));
let arr = str.split(',');
let x = Number(prompt("Vui lòng nhập số X: "))
let flat = true;
for(let j = 0; j < arr.length; j++)
{
    if(x == Number(arr[j]))
    {
        alert(`Số ${x} có trong các số`);
        flat = false;
        break;
    }
        
}
if(flat)
alert(`Số ${x} không có trong các số`);