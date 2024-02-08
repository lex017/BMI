const nav = document.querySelector(".nav")
window.addEventListener("scroll",stickyNavvar)

function stickyNavvar(){
    if(window.scrollY>nav.offsetHeight){
        nav.classList.add("active")
    }else{
        nav.classList.remove("active")
    }
}