
function digitalRoot(n) {
    let arr = n.toString().split("");
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += parseInt(arr[i]);
    }
    if(sum>9){
        return digitalRoot(sum);
    }else {
        return sum;
    }
}

console.log(digitalRoot(493193));