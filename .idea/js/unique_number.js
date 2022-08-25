function findUniq(arr) {
    arr.sort(function(a, b){return a - b});
    const firstNumber = arr[0];
    const secondNumber = arr[1];
    const lastNummber = arr[(arr.length)-1];
    if(firstNumber<secondNumber){
        return firstNumber;
    }
    return lastNummber;
}


console.log(findUniq([1,1,1,1,3]));
