const cageEle = document.getElementById("cage");
const lemon = document.getElementById("lemon");
const target = document.getElementById("target");
function setTarget(){
    let left = Math.floor(Math.random()*500)-80;
    let top = Math.floor(Math.random()*500)-80;

    if (left < 0){
        left =0;
    }

    if(top < 0){
        top =0;
    }

    target.style.left = left + "px";
    target.style.top = top + "px";
}

setTarget();


let interval  = null;
let timer = false;

function changeLocation(){
    let left = Math.floor(Math.random()*500)-80;
    let top = Math.floor(Math.random()*500)-80;

    if (left < 0){
        left =0;
    }

    if(top < 0){
        top =0;
    }

    lemon.style.left = left + "px";
    lemon.style.top = top + "px";
    hitBox();
}

function startMovement(){
    interval = setInterval(() => {
        changeLocation();
    }, 1000)
}

function endMovement(){
    clearInterval(interval);
}

function hitBox(){
    const lTop = parseFloat(window.getComputedStyle(lemon).top);
    const lLeft = parseFloat(window.getComputedStyle(lemon).left);
    const tTop = parseFloat(window.getComputedStyle(target).top);
    const tLeft = parseFloat(window.getComputedStyle(target).left);
    console.log(lTop-tTop, lLeft-tLeft);
    if(lTop-tTop<80 && lLeft-tLeft<80 && lTop-tTop>0&&lLeft-tLeft>0){
        console.log("hit")
    }

}



document.getElementById("scoot").addEventListener("click", changeLocation);

document.getElementById("crae").addEventListener("click", ()=>{
    timer = !timer;

    if(timer){
        startMovement();
    }else{
        endMovement();
    }
});


changeLocation();
hitBox()