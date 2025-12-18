/* //project.1 
let greeting = document.getElementById("greetings")  // DOM selection
let input = document.getElementById("input")         // DOM selection
let btn = document.getElementById("btn")             // DOM selection

btn.addEventListener("click", greets)                // event listener

function greets() {
    greeting.innerHTML = "Hello " + input.value      // reading input + updating DOM
}*/

/* //P-2 shopping list
let btn = document.getElementById("btn")
let itemList =document.getElementById("items-list")
let inputItem= document.getElementById("input")

btn.addEventListener("click", createlist)

function createlist(){
    let newli = document.createElement("li")// returns <li>
    newli.textContent = inputItem.value
    itemList.appendChild(newli)
}*/
// what i know is not important whats important
//is the sturucture and mental model i.e what i want that thing to do
// lesson learned✅

/*//p-3 Age Checker
let numbtn = document.getElementById("num-btn")
let para = document.getElementById("p")
let input = document.getElementById("inputNum")

numbtn.addEventListener("click", (e)=>{
    e.preventDefault()
    let value = parseInt(input.value)
    let min = 1
    let max = 120
    if(!Number.isNaN(value)){
        // !isNaN:true if the given value is NaN after being converted to a number; otherwise, false.
        //since the html page type is filled to number only the user cant enter any alphabet
        if(value < min) {
            para.innerHTML = "!Please enter a Number above 1!"
        } else if( value > max ){
            para.innerHTML = "!Please enter a Number!"
        } else {
            let age = 2025 - value 
            para.innerHTML = "Great! your were born in " + age
        }
    } else{
       para.textContent=  "!Please enter a Number!"
    }

})
// i want this function to take the input check if its a number
// between 1-120 and show yeah with vaild age or no valid age*/

/*//p-4 grade calculator 
let psub = document.getElementById("p-Sub")
let displayAverage = document.getElementById("get-average")
let calbtn = document.getElementById("cal-btn")
let input = document.getElementById("input1")
//let addsub = document.getElementById("add-sub")

let array = []
avg = 0 
total = 0
avg = 0

calbtn.addEventListener("click", calculate)

function calculate(){
    
    let currentValue = document.getElementById("input1").value// get input
    sub2 = document.getElementById("input2").value// get input
    sub3 = document.getElementById("input3").value
    sub4 = document.getElementById("input4").value
    sub5 = document.getElementById("input5").value

    currentValue = Number(currentValue)
    sub2 = Number(sub2)
    sub3 = Number(sub3)
    sub4 = Number(sub4)
    sub5 = Number(sub5)

    array.push(currentValue,sub2,sub3,sub4,sub5)
    console.log(array)
    
    for(let row of array){
        total = total + row 
    } 
    avg = total/array.length
    total = 0 
    array =[]

    displayAverage.innerHTML = "Your average: " + avg

    gograde(avg);
}

function gograde(avg){
    
    if(avg === 100){
       let newP = document.createElement("p") //  
       newP.innerHTML = "your grade: A " // WHAT
       displayAverage.appendChild(newP)  // WHERE 
    } else if (avg >= 90){
        let newP = document.createElement("p")
       newP.innerHTML = "your grade: B "
       displayAverage.appendChild(newP)
    } else if (avg >= 80){
       let newP = document.createElement("p")
       newP.innerHTML = "your grade: C "
       displayAverage.appendChild(newP)
    } else if (avg >= 70){
       let newP = document.createElement("p")
       newP.innerHTML = "your grade: D "
       displayAverage.appendChild(newP)
    } else if (avg >= 50){
       let newP = document.createElement("p")
       newP.innerHTML = "your grade: E "
       displayAverage.appendChild(newP)
    } else{
       let newP = document.createElement("p")
       newP.innerHTML = "practice makes a man perfect: F "
       displayAverage.appendChild(newP)
    }
}
//i want the input convert it into number then store them in an array then 
//array then can easily calculate using for...of loop */

/*//P-5 Social Media Hashtag Generato(Regex)

let input = document.getElementById("input-text")
let btn = document.getElementById("btn")
let alltext = document.getElementById("all-text")
console.log(alltext)

let hashtag = []

btn.addEventListener("click", findhashtag)

function findhashtag(str){
    str = input.value
    let wordarray = str.split(" ")
    console.log(wordarray)
    for(let row of wordarray){
        if(row.startsWith("#")){
            hashtag.push(row)
        }
    }console.log("found: " , hashtag)
    createnewli()
    wordarray = []
}  
 
function createnewli(){
    console.log("fine")
    for(let hashwords of hashtag){
        let newli = document.createElement("li")
        newli.textContent= hashwords
        alltext.appendChild(newli)
   } hashtag =[]
}
// the goal: user enters the input. i search for any hashtag words 
// select hashtag words and create a new list of those hashtags 
*/

/*// p - 6 Light/Dark Theme Toggle
let togglebtn = document.getElementById("btn")
let darkmode = document .querySelector(".dark-mode")

togglebtn.addEventListener("click", lightswitch)

let isDarkMode = false// i dont really get ⬅️this part of state managment

function lightswitch(){
    isDarkMode = !isDarkMode// so it says isdarkmode = false then !isdarkmode is true
    document.body.classList.toggle("dark-mode", isDarkMode)
    //if(isDarkMode){// so whats happening here is when the button is clicked 
        //it is false then it turn true after the click the flip given that 
        //is darkmode true the following logic runs right?
        //console.log("Dark mode?", isDarkMode)
        //document.body.classList.add("dark-mode")
    //} else{// and if its set to isdarkmode only false case will be included here right?
        //console.log("Dark mode?", isDarkMode)
        //document.body.classList.remove("dark-mode")
    //}
}*/

/*// P-7  Data Collection & Calculation/Restaurant Bill Splitter

let totalbill = document.getElementById("total-bill")
let noOfPeople = document.getElementById("no-of-people")
let tipPercentage = document.getElementById("tip-percentage")
let perPersondisplay = document.getElementById("total-per-person")
let subbtn = document.getElementById("sub-btn")
console.log(subbtn)
//take the input and divide by the number of people

subbtn.addEventListener("click", getbillvalue)

let totalperPerson = 0

function getbillvalue(){
    if(totalbill.value === "" || noOfPeople.value === "" || tipPercentage.value === "" ){
        perPersondisplay.textContent = "Error:Please fill all the inputs"
        return // Stop the function

    }else if(noOfPeople.value === "0"){
    console.log("ERROR: Can't divide by zero!")
    perPersondisplay.textContent = "Error: Need at least 1 person"
    return // Stop the function

    }else{
    totalperPerson = totalbill.value/ noOfPeople.value
    console.log(totalperPerson)}

    gettip(totalperPerson);
}

let totaltip = 0

function gettip(totalperPerson){
    totaltip = totalperPerson/tipPercentage.value
    let result = totaltip + totalperPerson 
    perPersondisplay.innerHTML = "Total Per-Person: " + result.toFixed(1)
    console.log(result)
}*/

/*//p-8 Bank Withdrawal Simulator
let bankBalance = document.getElementById("bank-balance");
let withdrawal = document.getElementById("withdrawal")
let enterbtn = document.getElementById("enter-btn")
let urBalancedisplay = document.getElementById("your-balance")

enterbtn.onclick = goenterbtn

let currentbankBalance = 1000

function goenterbtn(){

    try{
        if(withdrawal.value === "" ||  withdrawal.value === "0" || withdrawal.value.startsWith("-")){
        urBalancedisplay.textContent = "Input cannot be empty, 0 or negative "
        return  
        
    } else if(withdrawal.value > currentbankBalance){
        urBalancedisplay.textContent = "Insufficient Balance"
        return

    } else if(Number(withdrawal.value) <= currentbankBalance){
        console.log("processing demand")
        currentbankBalance = currentbankBalance - Number(withdrawal.value)
        console.log(currentbankBalance)
        bankBalance.textContent = "Bank Balance: " + currentbankBalance
        urBalancedisplay.textContent = "Your Current balance:" +  withdrawal.value
        }
    } catch(error){
        if(withdrawal.value === String || withdrawal.value === !isNaN ){
            console.error("Unexpected error:", error)
            urBalancedisplay.textContent = "System error occurred"
            }
    }
}*/

// P - 9 "Recipe Card Generator" Template Literals & Dynamic HTML
 
let recipeinput = document.getElementById("recipe")
let ingredientsinput = document.getElementById("ingredients")
let instructionsinput = document.getElementById("instructions")
let cardbtn = document.getElementById("generate-card")
let cardDisplay = document.getElementById("card-display")

cardbtn.onclick = generatecard;

function generatecard(){
    console.log("works")

    let Ingredientarray = ingredientsinput.value.split(",")
    console.log(Ingredientarray)
    let instructionarray = instructionsinput.value.split(",")
    console.log(instructionarray)

    let cardHTML = `
    <fieldset>
         <legend id="name">${recipeinput.value}</legend>

         <label>Ingredients: </label>

            <ul id="ingredient"> 
                ${Ingredientarray.map((things) => `<li>${things}</li>`).join("")}
            </ul>

         <label>Instructions: </label>
         
            <ul id="instruction">
                ${instructionarray.map((step) => `<li>${step}</li>`).join("")}
            </ul>
        
    </fieldset>
    `
    cardDisplay.innerHTML = cardHTML;
    
} 




































