window.onscroll=()=>scrollprogress()
const progressEl = document.querySelector(".progress")

function scrollprogress(){
    const pageheight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrollTop = document.documentElement.scrollTop
    const scrollpercentpage = (scrollTop/pageheight)*100
    progressEl.style.visibility="visible"
    progressEl.style.width=scrollpercentpage+"%"
    
}