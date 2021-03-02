// Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)

var array = [1,3,5,7,20];

function average(arr){
    var sum = 0;
    var avg = 0;
    for(var i = 0; i < arr.length; i++){
        sum = arr[i]+sum;
    }
    avg = sum/arr.length;
    return avg;
}

var averageOfArr = average(array);
console.log(averageOfArr);
