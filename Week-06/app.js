const userEle = document.getElementById("username");
const passWord = document.getElementById("password");
const submitBtn = document.getElementById("submit");
const result = document.getElementById("result");

submitBtn.addEventListener("click", ()=> {
    const checker = false;
    // if(userEle.value === "potato" && passWord.value === "password"){
    //    result.innerHTML = "You are now logged in!";
    // }else{
    //     result.innerHTML = "Username is incorrect";
    // }

    const question =userEle.value === "potato";
    console.log(question);

    if(question || passWord.value === "password"|| userEle.value === "tomato") {
        result.innerHTML = "You are now logged in!";
    }else{
        result.innerHTML = "Username is incorrect";
    }

    if(userEle.value === userEle.value.toLowerCase()){
        console.log("It lowercase")
    } else if(userEle.value === userEle.value.toUpperCase()) {
       console.log("It uppercase")
    } else {
        console.log("It has a mix of upper and lower case")
    }

    // result.innerHTML = userEle.value + passWord.value;
})
