const wrapper = document.getElementById('wrapper');

if(!localStorage.getItem("cart")){
    localStorage.setItem("cart", "[]")
}

const store = [
    "Apples", "Shoes", "Lemons", "Luke's Soul", "Luke's Sanity"
]

store.forEach((item, idx) => {
    const ele = document.createElement("div");
    const button = document.createElement("button");
    button.innerHTML = "Add to Cart";
    button.addEventListener("click", () => addToCart(idx))
    const name = document.createElement("h3");
    name.innerHTML = item;
    ele.appendChild(name);
    ele.appendChild(button);
    wrapper.appendChild(ele);
})


const addToCart = (idx)=>{
    const cart = JSON.parse(localStorage.getItem("cart"));
    cart.push(store[idx])
    localStorage.setItem("cart", JSON.stringify(cart))
    writeDisplay();
    displayCart();
}

const removeFromCart = (idx)=>{
    const cart = JSON.parse(localStorage.getItem("cart"));
    cart.splice(idx, 1);
    localStorage.setItem("cart", JSON.stringify(cart))
    writeDisplay();
    displayCart();
}

function writeDisplay(){
    document.getElementById('display').innerHTML = "Cart: "+
        JSON.parse(localStorage.getItem("cart")).length
}

function displayCart(){
    const cart = JSON.parse(localStorage.getItem("cart"));
    document.getElementById("cart").innerHTML = "";
    cart.forEach((item,idx) => {
        const ele = document.createElement("div");
        const button = document.createElement("button");
        button.innerHTML = "Remove";
        button.addEventListener("click", () => removeFromCart(idx))
        const name = document.createElement("h3");
        name.innerHTML = item;
        ele.appendChild(name);
        ele.appendChild(button);
        document.getElementById("cart").appendChild(ele);
    })
}


displayCart();
writeDisplay();





