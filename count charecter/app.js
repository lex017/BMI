const Count = document.querySelector(".Count")
const input = document.querySelector("input")

input.addEventListener("keyup", () =>{
    Count.innerHTML = input.value.length
})