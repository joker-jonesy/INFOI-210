const list = [1, 2, 3, 4];
const sentences = ["The cow goes moo.", "The turkey goes gobble gobble.", "Luke says the most crae things."]

const newList = list.map(itm => {
        return itm + 2
    }
)

const sum = list.reduce((sum, item) => {
    return sum +item;
})

const paragraph = sentences.reduce((para, item) => {
    return para +item+" ";
})

console.log(paragraph);

console.log(sum)

const lemons = ["green", "yellow", "blue", "brown", "yellow"]

const lemonCheck = lemons.map(itm =>{
    if(itm === "yellow"||itm==="green"){
        return 1
    }else{
        return 0
    }
})

const renderedLemons = lemons.map(itm =>{
    const ele = document.createElement("div")
    ele.innerHTML = itm;
    ele.style.textTransform = "uppercase";
    ele.style.fontWeight = "bold";
    ele.style.color = itm;
    return ele;
})

renderedLemons.forEach(itm =>{
    document.getElementById("wrapper").appendChild(itm)
})


console.log(renderedLemons);

const filteredLemons = lemons.filter(itm =>
    itm === "yellow"||itm==="green"
)

console.log(filteredLemons)