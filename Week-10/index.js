const list = [1, 2, 3, 4];
const sentences = ["The cow goes moo.", "The turkey goes gobble gobble.", "Luke says the most crae things."]

const newList = list.map(itm => {
        return itm + 2
    }
)

const sum = list.reduce((sum, item) => {
    return sum + item;
})

const paragraph = sentences.reduce((para, item) => {
    return para + item + " ";
})

const lemons = ["green", "yellow", "blue", "brown", "yellow"]

const lemonCheck = lemons.map(itm => {
    if (itm === "yellow" || itm === "green") {
        return 1
    } else {
        return 0
    }
})

const renderedLemons = lemons.map(itm => {
    const ele = document.createElement("div")
    ele.innerHTML = itm;
    ele.style.textTransform = "uppercase";
    ele.style.fontWeight = "bold";
    ele.style.color = itm;
    return ele;
})

function filterLemons(fil) {
    if (fil === "all") {
        return lemons.map(itm => {
            const ele = document.createElement("div")
            ele.innerHTML = itm;
            ele.style.textTransform = "uppercase";
            ele.style.fontWeight = "bold";
            ele.style.color = itm;
            return ele;
        })
    } else {
        const filteredLemons = lemons.filter(itm =>
            itm === "yellow" || itm === "green"
        )

        return filteredLemons.map(itm => {
            const ele = document.createElement("div")
            ele.innerHTML = itm;
            ele.style.textTransform = "uppercase";
            ele.style.fontWeight = "bold";
            ele.style.color = itm;
            return ele;
        })
    }
}

document.getElementById("select").addEventListener("change", (event) => {
    // console.log(event.target.value)
    renderLemons(filterLemons(event.target.value));
})

document.getElementById("search").addEventListener("input", (event) => {
    const searchValue = event.target.value
    const searchedLemons = lemons.filter(itm =>
        itm.includes(searchValue)
    )
    const newLemons = searchedLemons.map(itm => {
        const ele = document.createElement("div")
        ele.innerHTML = itm;
        ele.style.textTransform = "uppercase";
        ele.style.fontWeight = "bold";
        ele.style.color = itm;
        return ele;
    })

    renderLemons(newLemons);
})

function renderLemons(lemons) {
    document.getElementById("wrapper").innerHTML = "";
    lemons.forEach(itm => {
        document.getElementById("wrapper").appendChild(itm)
    })
}

// renderLemons(renderedLemons);

