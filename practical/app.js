
let hp = 100;

function damager(dmg){
    hp = hp - dmg
}


document.getElementById("submit").addEventListener("click", function() {

    const price =Number(document.getElementById("drinks").value);
    const qty = Number(document.getElementById("qty").value)

    document.getElementById("result").innerHTML = price * qty;

})

const ele = document.createElement("div");

ele.className = "ele";

document.body.appendChild(ele);