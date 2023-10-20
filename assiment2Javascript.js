// <------------multiply by 3 and 5--------------->

// function printMultiplesOf3And5InInterval(start, end) {
//     for (let i = start; i <= end; i++) {
//       if (i % 3 === 0 && i % 5 === 0) {
//         console.log(i + " is a multiple of both 3 and 5");
//       } else if (i % 3 === 0) {
//         console.log(i + " is a multiple of 3");
//       } else if (i % 5 === 0) {
//         console.log(i + " is a multiple of 5");
//       }
//     }
//   }
//   printMultiplesOf3And5InInterval(1 , 60)

// function multiplyby3and5(a , b){
//     for(let i = a ; i<= b ; i++){
//         if(i%3 === 0 && i%5 === 0){
//             console.log(i+" " + "is multiply 3 and 5 ");
//         }
//         else if(i%3 === 0){
//             console.log( i+" " + "multiply by 3");
//         }
//         else if (i%5===0){
//             console.log(i+" " + "multiply by 5");
//         }
//     }
// }
// multiplyby3and5(1 , 30)
// let num = prompt("Plz Enter A Number :--->")
//         let f = 1;

//         if(num == 0){
//             alert(`The Factorial of ${num} is 1.`)
//         }
//         else if( num < 0){
//             alert(`The Factorial of ${num} is not possible`)
//         }
//         else{
//             for( let i =1 ; i <= num ; i++){
//                 f = f * i;
//             }
//             alert(`The Factorial of ${num} is :---> ${f}`)
//         }

// <-------------factorial number-------------->

// let num = 4;
// let one = 1;

// if(num == 0){
//     console.log("this number is factorial not possible ");
// }
// else if(num < 0){
//     console.log("this number is factorial not possible ");
// }
// else{
//     for(let i = 1 ; i<= num ; i++){
//       one = one * i;
//     }
//     console.log(`The Factorial of ${num} is :---> ${one}`);
// }

// let a =0 , b = 1;
// let num = 5;
// for(let i = 0; i<=num; i++ ){
//      let temp = a+b;
//      console.log(temp);
//      a = b;
//      b = temp;
// }

// <-----------armstrong number------------>

// let number = 153;
// let temp= number;
// let ln = number.toString().length;
// let sum = 0;
// while(temp>0){
//     let digit = temp % 10 ;
//     sum += digit**ln;
//     temp = parseInt(temp/10);
// }
// if(sum == number){
//     console.log(`${number}:- a armstrong number`);
// }else{
//     console.log(`${number}:- not a armstrong number`);
// }

// array.sort((a , b )=> a-b)[1];
// console.log(array);
let array = [12, 11, 5, 20, 14, 6, 7, 30, 2, 1,29];

// function findSecondLargest(arr) {
//   let firstLargest = arr[0];
//   console.log(firstLargest);
//   let secondLargest = arr[0];
//   console.log(secondLargest);
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > firstLargest) {
//         secondLargest = firstLargest;
//         firstLargest = arr[i];
//         console.log(arr[i]);
//         console.log(firstLargest);
//     }else if(arr[i] < firstLargest && arr[i] > secondLargest){
//         secondLargest = arr[i]
//         console.log(secondLargest);
//     }
//   }
//   return secondLargest;
// }
// let result = findSecondLargest(array)
// console.log(result);

//
// <------------bubble sorting--------------->

// for(let i = 0 ; i < array.length ; i++){
//     for(let j =0 ;j < array.length-i-1; j++){
//         if (array[j]> array[j+1]){
//             let temp = array[j];
//             array[j] = array[j+1];
//             array[j+1]= temp;
//         }
//     }

// }
// console.log(array);

// function findSecondLargest(arr) {

//     let firstLargest = arr[0];
//     let secondLargest = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > firstLargest) {
//             secondLargest = firstLargest;
//             firstLargest = arr[i];
//         } else if (arr[i] < firstLargest && arr[i] > secondLargest) {
//             secondLargest = arr[i];
//         }
//     }

//     return secondLargest;
// }

// // Example usage:
// const arr = [12, 35, 15,20 ,33];
// const result = findSecondLargest(arr);
// console.log("Second Largest Element: " + result);




// function isPalindrome(str) {
//     // Remove non-alphanumeric characters and convert to lowercase
//     str = str.replace(/[^h]/g, '').toLowerCase();
    
//     // Compare the original string with its reverse
//     return str === str.split('').reverse().join('');
// }

// // Example usage:
// const testString = "this , yogesh, a plan, a canal, Panama";
// if (isPalindrome(testString)) {
//     console.log(`"${testString}" is a palindrome.`);
// } else {
//     console.log(`"${testString}" is not a palindrome.`);
// }

function calculatePower(x, y) {
    let result = 1;

    for (let i = 0; i < y; i++) {
        result *= x;
    }

    return result;
}

// Example usage:
const base = 3;
const exponent = 4;
const result = calculatePower(base, exponent);
console.log(`${base}^${exponent} = ${result}`);
