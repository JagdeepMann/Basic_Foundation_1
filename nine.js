// Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])

var array = [1,5,10,-2];

function squares(arr){
    for (let index = 0; index < array.length; index++) {
        arr[index] = arr[index]*arr[index];
    }
    return arr;
}

var squaredArray = squares(array);
console.log(squaredArray);