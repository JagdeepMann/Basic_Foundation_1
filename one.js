// Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.

function zeroTo255(){
    var arr = [];
    for(var i = 1; i <=255; i++){
        arr.push(i);
    }
    return arr;
}

var array = zeroTo255();
console.log(array);