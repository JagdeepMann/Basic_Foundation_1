// Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
var array = [1,1,1];

function iterateArr(arr){
    var sum = 0;
    for(var i =0; i < arr.length; i++){
        sum = arr[i]+sum;
    }
    return sum;
}

var sumOfValues = iterateArr(array);
console.log(sumOfValues);