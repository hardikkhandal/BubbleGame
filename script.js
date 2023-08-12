var timer = 60;
var score = 0;
var hitnum;

function increaseScore(){
    score+=10;
    document.querySelector("#scores").innerHTML = score;
}
function playagain(){
    timer = 60;
    hitnumber();
    createBubble();

}
function setTimer(){
    setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#time").textContent = timer;
        }else{
           document.querySelector("#hite").textContent = "0";
           document.querySelector("#pbottom").innerHTML = "<h1>Game Over!</h1>";
        }

    },1000);
}
function createBubble(){
var clutter="";

for(var i =1;i<=114;i++){
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbottom").innerHTML = clutter;
}

function hitnumber(){
    hitnum = Math.floor(Math.random()*10);
    document.querySelector("#hite").textContent = hitnum;
}

document.querySelector("#pbottom").addEventListener("click",function(details){
    var clickednumber = Number(details.target.textContent);
    if(clickednumber == hitnum){
    increaseScore();
    createBubble();
    hitnumber();
}})

setTimer();
hitnumber();
createBubble();
