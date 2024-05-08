// 1
const sum = n => {
    if (n <= 1) {
        return 1;
    }
    return n + sum(n - 1);
}


// 2
const revers = str => {
    if (str.length === 1) {
        return str;
    }
    return str.slice(-1) + revers(str.slice(0, -1))
}


// 3
const countDown = n => {
    console.log(n);
    if (n === 1) return;
    countDown(n - 1);
}


// 4
const printArr = arr => {
    console.log(arr[0]);
    if (arr.length === 1) return;
    printArr(arr.slice(1));
}
