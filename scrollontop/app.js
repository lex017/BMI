const scrollbtn = document.querySelector(".top")
const rootEl = document.documentElement
document.addEventListener("scroll",showbtn)
scrollbtn.addEventListener("click",scrolltotop)

function showbtn() {
   const scrollTotal = rootEl.scrollHeight - rootEl.clientHeight
   if(rootEl.scrollTop/scrollTotal>0.3){
    scrollbtn.classList.add("show-btn")
   }else{
    scrollbtn.classList.remove("show-btn")
   }
}
function scrolltotop() {
    rootEl.scrollTo({
        top:0,
        behavior: "smooth"
    })
}