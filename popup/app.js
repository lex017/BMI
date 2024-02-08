const openbtn = document.querySelector(".open-btn")
const closebtn = document.querySelector(".close-btn")
const modal = document.querySelector(".modal-container")

openbtn.addEventListener("click",() =>{
    modal.classList.add("show")
})
closebtn.addEventListener("click",()=>{
    modal.classList.remove("show")
})


