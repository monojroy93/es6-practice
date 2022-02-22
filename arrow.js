// function duoble(num){
//     return num * 2;
// }
// const result = duoble(4);
// ...........................................
// const duoble = function(num){
//     return num *2;
// }
// const result = duoble(4);
// .........................
//  es6 use...............
const duoble = num => num *2;
// const result = duoble(4);
const add = (x, y) => x + y;
// const result = add(4, 10);
const give5= () => 5;
// const result2 = give5();
const doMath = (x, y)=>{
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const result3= doMath(10, 5)
console.log(result3);