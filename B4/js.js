let str = String(prompt("Vui lòng nhập size các con cừu cách nhau bởi dấu ',' (size > 8): "));
let arr = str.split(',');
let newArr = [];
for (let j = 0; j < arr.length; j++) {
    let x = Number(arr[j]);
    newArr.push(x);
}
alert(`Kích thước các con cừu của tui là:\n ${newArr}`);
let mx = newArr[0];
let index = 0;

for (let i = 1; i < newArr.length; i++) {
    if (mx < newArr[i]) {
        mx = newArr[i];
        index = i;
    }
}
alert(`Con cừu to nhất trong bầy có kích thước là  ${newArr[index]} hãy cắt lông nó nào `);
newArr[index] = 8;
alert(`Kích thước các con cừu của tui còn lại là:\n ${newArr}`)

for (let i = 1; i <= 3; i++) {
    alert(`Tháng ${i}`);
    for (let j = 0; j < newArr.length; j++)
        newArr[j] += 50;
    alert(`Kích thước các con cừu của tui sau 1 tháng là:\n ${newArr}`);
    mx = newArr[0];
    index = 0;
    for (let i = 1; i < newArr.length; i++) {
        if (mx < newArr[i]) {
            mx = newArr[i];
            index = i;
        }
    }
    alert(`Con cừu to nhất trong bầy có kích thước là  ${newArr[index]} hãy cắt lông nó nào `);
    newArr[index] = 8;
    alert(`Kích thước các con cừu của tui còn lại là:\n ${newArr}`)

}
let sum = Number(0);
for (let i = 0; i < newArr.length; i++)
    sum += newArr[i];
alert(`Tổng kích thước đàn cừu tui trong thời gian qua là: ${sum} `);
alert(`Tổng tiền tui kiếm được là: ${sum} * 2$ = ${sum * 2} `);