const members = [
  { name: "Vijay Gupta", age: 20 },
  { name: "Yash Jangid", age: 40 },
  { name: "Firoz Khan", age: 41 },
  { name: "Amrit Srivastava", age: 17 },
  { name: "Chandraprakash Sharma" },
  { name: "Swpril Ahuja", age: 45 },
  { name: "Yogesh Khatri", age: 51 },
];

//<-------------- 1. Get array of first names of everyone----------------->



const firstNames = members.map((member) => {
  const parts = member.name.split(" ");
  return parts[0];
});

console.log(firstNames);



// <----------2. Make everyone's last names in UPPERCASE in given array of objects--------->



const LastNames = members.map((member) => {
  const parts = member.name.split(" ");
  parts[1] = parts[1].toUpperCase();

  member.name = parts.join(" ");

  return member;
});

console.log(LastNames);



// <----------3. Get entries where age is between 41-60------------>



const filteredMembers = members.filter((member) => {
  return member.age >= 41 && member.age <= 60;
});

console.log(filteredMembers);



// <---------4. Get average age---------->



let totalAge = 0;
let count = 0;

members.forEach((member) => {
  if (typeof member.age === "number") {
    totalAge += member.age;
    count++;
  }
});
// Calculate the average age
const averageAge = totalAge / count;

console.log("Average Age:", averageAge);


// <----------5. Get Person with maximum age----------->

let maxAgePerson ;
let maxAge = 0;

for (let i = 0; i < members.length; i++) {
  const member = members[i];
  if (member.age > maxAge) {
    maxAge = member.age;
    maxAgePerson = member;
  }
}console.log(maxAgePerson);


// <------------6. Divide persons in three groups, result should look like-------------->


let Group ={ young: [], old: [], noage: [] }
const result = members.forEach( member =>{
    if(member.age === undefined){
       Group.noage.push(member)
    }
    else if(member.age <= 35){
        Group.young.push(member)
    }else{
        Group.old.push(member)
    }
})

console.log(Group);



// <-------------7. add a new member to same members array instance at index 2-------------->

const newMember = {name : 'Mukesh beniwal' , age : 28}

members.splice(2 , 0 , newMember);

console.log(members);

// <----------8. extract first and second element using destructing------------->

let [firstElement , secondElement] = members;
console.log(firstElement);
console.log(secondElement);


//<------------ 9. Create a new array instance adding a new member at index 0,and keeping existing afterwards ----------------->

const newObj = {name:'Ashok Saini' ,  age: 28};

const newMemberArray = [ newObj , ...members];

console.log(newMemberArray);

// <----------10. Extract properties of object using destructuring------------->

const person = {
    firstName: "dev",
    lastName: "losel",
    age: 22,
    city: "jaipur",
  };

  let {firstName , lastName , age , city} = person;

  console.log(firstName , lastName , age , city);
  

// <------------Rename extracted property of object while destructing ----------->


const person2 = {
    firstName: "Mohit",
    lastName: "kumawat",
    age: 25,
    city: "New york",
  };

  let {firstName:fname , lastName:lname , age:personage , city:residence} =person2;

  console.log(fname);
  console.log(lname);
 console.log(personage);
 console.log(residence);

// <-----12. Destructure any property of an object and use spread operator to get remaining properties in an object-------->


const person3 ={
    personName : "yogesh",
    personLastName: "kumawat",
    personage:21,
    personCity : "sikar"
}
let {personName, ...rest} = person3;
console.log(personName);
console.log(rest);


// <--13. Create a new object by copying using spread operator, override one of the properties to assign a new value in the same step--->

const updatedObject ={
    ...person3,
    personage:25
}
console.log(updatedObject);