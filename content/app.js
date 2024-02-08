const smalling = document.querySelectorAll(".gallery img")
const fullimg = document.querySelector(".full-images")
const modal = document.querySelector(".modal")
smalling.forEach(img=>{
    img.addEventListener("click",()=>{
        const fullsize = img.getAttribute("alt");
        const path = `/img/foods-images/full/${fullsize}.jpg`
        fullimg.src = path
        modal.classList.add("open")
    })
})
modal.addEventListener("click",(e)=>{
    if(e.target.classList.contains("modal")){
        modal.classList.remove("open")
    }
})