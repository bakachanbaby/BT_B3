let str = String(prompt("Vui lòng nhập các số cách nhau bởi dấu ',': "));
let arr = str.split(',');
let x = Number(arr[0]);
for(let j = 1; j < arr.length; j++)
{
    if(x > Number(arr[j]))
    {
        x = Number(arr[j]);
    }
        
}
alert(`Số bé nhất trong các số là : ${x} `);