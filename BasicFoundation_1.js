// Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
function zeroTo255() {
    var arr = [];
    for (var i = 1; i <= 255; i++) {
        arr.push(i);
    }
    return arr;
}

var array = zeroTo255();
console.log(array);


// Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.
function getEven1000() {
    var sum = 0;
    for (var i = 1; i <= 1000; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}
var sum = getEven1000();
console.log(sum);


// Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).
function sumOfOdds() {
    var sum = 0;
    for (var i = 1; i <= 5000; i++) {
        if (i % 2 !== 0) {
            sum = sum + i;
        }
    }
    return sum;
}

var sum = sumOfOdds();
console.log(sum);


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


// Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
function arrayOfOdds (arr){
    var arr = [];
    for(var i = 0; i <= 50; i++){
        if(i % 2 !== 0){
            arr.push(i);
        }
    }
    return arr;
}

var allOdds = arrayOfOdds();
console.log(allOdds);


// Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).
var array = [1,3,5,7];
var Y = 3;

function greaterThanY(arr, num){
    var count = 0;
    for (var i = 0; i < arr.length; i++){
        if(arr[i]>num){
            count++

        }
    }
    return count;
}

var bigger = greaterThanY(array, Y);
console.log(bigger);


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


// Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
var array = [1, 5, 10, -2];

function maxMinAv(arr){
    var max = arr[0];
    var min = arr[0];
    var sum = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
        min = arr[i];
    }
    sum+=arr[i];
    
}
var avg = (sum/arr.length);
arr = [max, min, avg];
return arr;
}

console.log(maxMinAv(array));


// Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
var array = [1,5,10,-2];

function swapValues(arr){
    var temp = 0;
    temp = arr[arr.length - 1];
    arr[arr.length - 1] = arr[0];
    arr[0] = temp;

    return arr;
}

var newArray = swapValues(array);
console.log(newArray);


// Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
var array = [-1,-3,2];

function numberToString(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 'Dojo';
        }
    }
    return arr;
}

var newArray = numberToString(array);
console.log(newArray);