let gameSeq = [];
let userSeq = [];

let lvl = 0;
let started = false;
let btns = ["yellow", "green", "red", "purple"];
document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game is started");
        started = true;
        lvlUp();
    }
})
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250)
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash")
    },250)
}
let h2 =  document.querySelector("h2");
function lvlUp(){
    userSeq = []
    lvl++
    h2.innerText = `Level is ${lvl}`
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randbtns = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randbtns);
    gameSeq.push(randColor);
    console.log(gameSeq)

    gameFlash(randbtns);
}
function checkAns(idx){
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(lvlUp(),1000)
        }
    } else{
        h2.innerHTML = `Game Over! Your score was <b>${lvl}</b> <br> Please any key to start.`
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150)
        reset();
    }
}
function btnPress(){
    let btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);
    checkAns(userSeq.length-1)
}
let allbtns = document.querySelectorAll(".btn")
for(btn of allbtns){
    btn.addEventListener("click" , btnPress);
}
function reset(){
    userSeq = [];
    started = false;
    gameSeq = [];
    lvl = 0;
}
    

