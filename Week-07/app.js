const wrapper = document.querySelector('#wrapper');

const list = [
    {
        name:"Apples",
        category:"Fruit",
        price: 20
    },
    {
        name:"Carrots",
        category:"Vegetable",
        price: 4
    }
];


function renderItems(){
    wrapper.innerHTML = '';
    list.forEach((item, idx) => {
        const ele = document.createElement("div");
        const header = document.createElement("h1");
        const category = document.createElement("h3");
        const deleteEle = document.createElement("button");
        deleteEle.addEventListener("click", () => {
            list.splice(idx,1);
            renderItems();
        })
        deleteEle.innerHTML = "X";
        ele.style.color = "red"
        header.innerHTML = item.name;
        category.innerHTML = item.category;
        ele.appendChild(header);
        ele.appendChild(category);
        ele.appendChild(deleteEle);
        wrapper.appendChild(ele);
    })
}

renderItems();


document.getElementById("submit").addEventListener("click", () => {
    const obj ={
        name:document.getElementById("name").value
    }
    list.push(obj)
    renderItems();
})