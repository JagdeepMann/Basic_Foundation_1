//  Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)

var array = [-3,3,5,7];

function findMax(arr){
    max = arr[0];
    for (let index = 0; index < array.length; index++) {
        if(arr[index]>max){
            max = arr[index];
        }
        
    }
    return max;
}

var maxVal = findMax(array);
console.log(`maxium value in given array is: ${maxVal}`);