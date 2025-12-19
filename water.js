let addbtn = document.getElementById("add");
let removebtn = document.getElementById("remove");
let resetbtn = document.getElementById("reset");
let progressBar = document.getElementById("progress-bar");
let prognum = document.getElementById("progress-num")
let progress = document.querySelector(".progress")


addbtn.addEventListener("click", goadd);
removebtn.addEventListener("click" ,goremove);
resetbtn.addEventListener("click", goreset);


function goadd(){
    if(progressBar.value  === 8){
        let newP = document.createElement("p")
        newP.textContent = "hurray YOU reached todays limit"
        progress.appendChild(newP);
        return
    }
    progressBar.value = 1 + progressBar.value
    prognum.textContent = progressBar.value + "/8"
    console.log(progressBar.value)
}

function  goremove(){
    if(progressBar.value  < 1){
        let newP = document.createElement("p")
        newP.textContent = "Value canot be less then 1"
        progress.appendChild(newP);
        return
    }
    progressBar.value =  progressBar.value - 1
    prognum.textContent = progressBar.value + "/8"
}

function goreset(){
    progressBar.value = 0
    prognum.textContent = 0 + "/8"
    console.log("works")
}
