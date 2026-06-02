let str1 = readline();
let str2 = readline();
let arr = str1.split('');  // 转为数组便于操作

for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j < str2.length; j++) {
        if (arr[i] === str2[j]) {
            arr.splice(i, 1);  // 删除该字符
            break;
        }
    }
}

console.log(arr.join(''));  // 转回字符串