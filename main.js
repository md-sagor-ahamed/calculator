

const button = document.querySelectorAll(".number");
const display = document.querySelector(".showInputNumber");
const displayclear = document.querySelector(".clear");
const calculateItems = document.querySelector(".calculate")

button.forEach((item)=>{
    item.addEventListener("click", (e)=>{
        display.value += item.value;
    })
})

displayclear.addEventListener("click", ()=>{
    display.value = "";
})

calculateItems.addEventListener("click", ()=>{
    const result = eval(display.value)
    display.value = "";
    display.value = result;
})










