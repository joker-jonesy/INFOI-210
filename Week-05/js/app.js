// const number1 =  Number(prompt("Enter a number"));
//
// const number2 =  Number(prompt("Enter number 2"));
//
// const number3 = Number(prompt("Enter a number 3"));

// console.log(number1+number2+number3);

// console.log((number1+number2+number3)/3);
//
// const thing = "words are very cool"
//
// prompt(thing+" is stringy")


// function mathSum (num, num2){
//     // console.log(num)
//     const sum = Number(num) + Number(num2);
//     console.log(sum);
// }


function mathSum (){
    // console.log(num)
    const val1 =Number(document.getElementById("number1").value);
    const val2 =Number(document.getElementById("number2").value);
    const sum = val1 +val2
    return sum;
}


function mathSubtract(){
    const val1 = Number(document.getElementById("number1").value);
}



document.querySelector("button").addEventListener("click", function() {
    handleSubmit()
    console.log("add")
})

function handleSubmit(){
    // event.preventDefault();
    console.log(document.getElementById("cars").value);
    document.querySelector(".box").innerHTML=mathSum();
}


// prompt(document.querySelector("button").innerText)

