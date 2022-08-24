'use strict';
function findUniq(arr) {
    const firstNumber = arr[0];
    const secondNumber = arr[1];
    const thirdNumber = arr[2];
    if(firstNumber!==secondNumber){
        if(secondNumber===thirdNumber){
            return firstNumber;
        }else {
            return secondNumber;
        }
    }else if(secondNumber!==thirdNumber){
        return thirdNumber;
    }else {
        const arr2 = arr.slice(1);
        console.log(arr2);
        findUniq(arr2);
    }
}


console.log(findUniq([1,1,1,3]));
