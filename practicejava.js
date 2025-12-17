
/* Level 3
Goal: combine what you learned earlier with array iteration.

Given an array let nums = [2, 5, 8, 11]; print each value.
Multiply each number by 2 and print.
Add up all numbers in the array using a loop.
Print only the numbers greater than 5.
Create a new array doubled = [] and push each doubled number 
into it.
🧠 Checkpoint: if you understand why you need push() and why
you can’t just do nums *= 2, you’re thinking like a developer.*/

const num = [2,5,8,11,12];
total = 0;
let names = ["dian", "pony", "rin", "gpt" ];

/*for(let row of num){
    console.log(row)
}//1.✅ would any other loop work for an array instead of for...of

for(let row of num){
    if(row > 5){
        console.log(row)
    }
}//2.✅

for(let row of num){
    total = total + row 
    console.log(total)
}//3.✅


for(const row of names){
    total = "Hello, " + row + "!"
    console.log(total)
}//4.✅ 
let i =  0
names = ["dian", "pony", "rin", "gpt","james", " damian" ];
for(let row of names){
    row = i + 1
    total = total + row     
} //dont ask me how i did that i just did 5.✅
 console.log(total)

let myArray = [1,2,3,4,5]
for(let row of myArray){
    if(row % 2 === 0){
        console.log(row)
    }
}//6 done

names = ["dian", "pony", "rin", "gpt","james", " damian" ];
for(let row of names){
    if(row.length > 3){
        console.log(row) 
    }
}// 7th done

for(row of num){
    row = row * 2
    console.log(row)
}// 8th done*/

let nim = [1,4,5,2,6,7,89,45,23,0]
//console.log(Math.max(...nim))
// ... is a spread operator

/*Level 4
Goal: make the loop do something meaningful.

Reverse an array manually (no .reverse() method).
Print the maximum number from an array.
Count how many strings in an array have more than 5 letters.
Join an array of words into a single string with spaces.
Use a loop to replace all negative numbers in an array with 0.

💡 RULES (to make the exercise effective, not mechanical)
Don’t peek at past code or ask for syntax help until you’ve written a full attempt.
If something breaks, write a comment describing what you thought would happen.
Only Google why something behaves that way, not “solution for XYZ.”
Don’t copy-paste your working code — retype it manually to burn it into your brain.
*/
//Find the largest number in an array (no built-ins like Math.max).

//Combine two arrays into one (without using .concat).

/*let numb = 1

nim = [1,4,5,2,]
for(let row of nim){
    if(row > numb){
        total = row 
        numb = total// or we can just write numb = row
    }
}console.log(total)

nim = [1,4,5,2]
let a = [1,2,3]
nim.push(...a)
console.log(nim) // one way to concate 🫣 cheating nah bro 
// its creativity 😶🤣*/ 

let arr = [10,20,30];
let result = [];

for(let row of arr){ 
    arr[arr.length] = row;
    
}console.log(result)