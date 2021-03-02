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