
function digitalRoot(n) {
    let arr = n.toString().split("");
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += parseInt(arr[i]);
    }
    if(sum<10){
        return sum;
    }else {
        console.log(sum);
        digitalRoot(sum);
    }
}

console.log(digitalRoot(132189));