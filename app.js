//Part 2 - do same as below using async/await

document.getElementById('btn')
addEventListener('click', async () => {
    try {
        console.log('Here I am');
        let someVal = await slowMath.add(6,2);
        console.log(someVal);
        someVal = await slowMath.multiply(someVal,2);
        console.log(someVal);
        someVal = await slowMath.divide(someVal,4);
        console.log(someVal);
        someVal = await slowMath.subtract(someVal,3);
        console.log(someVal);
        someVal = await slowMath.add(someVal,98);
        console.log(someVal);
        someVal = await slowMath.remainder(someVal,2);
        console.log(someVal);
        someVal = await slowMath.multiply(someVal,50);
        console.log(someVal);
        someVal = await slowMath.remainder(someVal,40);
        console.log(someVal);
        someVal = await slowMath.add(someVal,32);
        console.log(someVal);
    } catch (err) {
        console.log(err);
    }
        
    });

// //step 1 - add 6 + 2
// slowMath.add(6,2)
// .then (function(step1){
//     console.log('Result from step 1 is ' + step1);
//     //step 2 - mult result by 2
//     return slowMath.multiply(step1, 2);
// }).then(function(step2){
//     console.log('Result from step 2 is ' + step2);
//     //step 3 - divide by 4
//     return slowMath.divide(step2, 4)
// }).then(function(step3){
//     console.log('Result from step 3 is ' + step3);
//     //step 4 - sub 3
//     return slowMath.subtract(step3, 3);
// }).then(function(step4){
//     console.log('Result from step 4 is ' + step4);
//     //step 5 - add 98
//     return slowMath.add(step4, 98);
// }).then(function(step5){
//     console.log('Result from step 5 is ' + step5);
//     //step 6 - divide by 2 for remainder
//     return slowMath.remainder(step5, 2);
// }).then(function(step6) {
//     console.log('Result from step 6 is ' + step6);
//     //step 7 -mult by 50
//     return slowMath.multiply(step6, 50);
// }).then(function(step7){
//     console.log('Result from step 7 is ' + step7);
//     //step 8 - divide by 40 to find remainder
//     return slowMath.remainder(step7, 40);
// }).then(function(step8){
//     console.log('Result from step 8 is ' + step8);
//     //step 9 - add 32 
//     return slowMath.add(step8, 32)
// }).then(function(step9){
//     console.log('Result from step 9 is ' + step9);
//     console.log('The final result is ' + step9);

// }).catch(function(err) {
//     console.log(err);
// })


