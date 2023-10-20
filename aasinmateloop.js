// 1.Looping through an Array: Write a loop to print out all elements of an array of numbers.

const number = [1,3,2,4,5,6,9,8];
for(let i = 0 ; i<number.length ; i++){
    console.log(number[i]);
}
console.log("<-------------------------------------------------->");
// 2.Sum of Array Elements: Write a loop to calculate and print the sum of all elements in an array.

const number2 = [12,13,14,11,15,2,1,4,5];
let sum = 0 ;
for(let i = 0 ; i<number2.length ; i++){
    sum += number2[i]
}
console.log(sum);
console.log("<-------------------------------------------------->");

// 3.Finding Maximum Value: Write a loop to find the maximum value in an array of numbers.

const array = [12,34,45,65,75,34,2,33,24,55,42];
let max =0 ;
for(let i = 0 ; i< array.length ; i++){
   if(array[i]>max){
    max = array[i]
   }
}
console.log(max);
console.log("<-------------------------------------------------->");

// 4.Filtering Even Numbers: Write a loop to create a new array containing only the even numbers from an existing array of numbers.

const newArray = [8,2,4,3,1,5,7,13,12,100,50,24,42,53,25]
let evenNumber = [];
for (let i = 0; i < array.length; i++) {
    if (newArray[i]%2 == 0) {
        evenNumber.push(newArray[i])
    } 
}
console.log(evenNumber);
console.log("<-------------------------------------------------->");


// 5.Reversing an Array: Write a loop to reverse the elements in an array (without using the reverse method).

const Number5 = [1,2,3,4,5,6,8,9,10];

for(let i = 0 ; i < Number5.length/2 ; i++ ){
    let temp = Number5[i];
    Number5[i]=Number5[Number5.length-1-i];
    Number5[Number5.length-1-i] = temp;
}
console.log(Number5);
console.log("<-------------------------------------------------->");

// 6.Checking for Presence: Write a loop to check if a specific value exists in an array.

const arr = [2,1,5,7,9,8,3,6,4,0];

function Check(arr , value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value)  {
         return true;
        }
         else{
            return false
         }
     }
}

console.log(Check(arr , 13));
console.log("<-------------------------------------------------->");

// <------------------------------------Loops with Objects:-------------------------------------->

// 7. Looping through Object Properties: Write a loop to print out all properties of an object.

const Object = {
    name:"Yogesh",
    lastname: "kumawat",
    class: "A++",
    age : 21,
}

for( let key in Object){
    console.log("Object Properties:->"+" "+key);
}
console.log("<-------------------------------------------------->");

// 8.Sum of Object Values: Write a loop to calculate and print the sum of all values in an object (assuming all values are numbers).


const myObject = {
    value1: 10,
    value2: 20,
    value3: 30
};

let totalSum = 0;

for( let i in myObject ){
    totalSum += myObject[i];
}

console.log(totalSum);

console.log("<-------------------------------------------------->");

// 9.Finding Maximum Value in Object: Write a loop to find the maximum value among the values in an object (assuming all values are numbers).

let maxValue = 0;
for(let i in myObject){
    if(myObject[i]>maxValue){
        maxValue = myObject[i]
    }
}
console.log("maximum value:->"+" "+maxValue);
console.log("<-------------------------------------------------->");

// 10.Counting Properties: Write a loop to count the number of properties in an object.

let count = 0;

for(let i in myObject){
    if(myObject[i]){
        count++
    }
}

console.log(count);

console.log("<-------------------------------------------------->");

// 11.Filtering Objects: Write a loop to create a new object containing only key-value pairs that meet a specific condition (e.g., all values greater than 10).
const originalObject = {
    a: 15,
    b: 5,
    c: 20,
    d: 12,
    e: 8
  };
  
  const filteredObject = {};
  
  for (const key in originalObject) {
    if (originalObject[key] > 10) {
      filteredObject[key] = originalObject[key];
    }
  }
  
  console.log(filteredObject);

console.log("<-------------------------------------------------->");

// 12. Checking for Key Existence: Write a loop to check if a specific key exists in an object.
 
const person = {
    name : "rahul",
    lastname : "nehra",
    age : "22",
    city : "jaipur"
}
let keyToCheck = 'loc';
let keyExists = false;
for( let key in person){
    if(key === keyToCheck){
        keyExists = true;
       break
    }
}

if(keyExists){
    console.log(`${keyToCheck} exists in the object`);
}
else{
    console.log(`${keyToCheck} does not exists in the object`);
}

console.log(keyExists);
