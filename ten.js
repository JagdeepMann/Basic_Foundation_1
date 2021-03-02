// Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])

var array = [1,5,10,-2];

function noNegatives(arr){
    for (let index = 0; index < arr.length; index++) {
        if(arr[index]<0){
            arr[index] = 0;
        }
        
    }
    return arr;
}

var allpositives = noNegatives(array);
console.log(allpositives);