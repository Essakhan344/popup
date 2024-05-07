let btn = document.getElementById("btn");
let btn1 = document.getElementById("btn1");
let pop = document.querySelector(".container2")

btn.addEventListener("click", ()=>{
    pop.classList.add("container2-open");
    btn.style.visibility = "hidden";

});

btn1.addEventListener('click', ()=>{
    pop.classList.remove("container2-open");
    btn.style.visibility = "visible"
});