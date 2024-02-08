const message =[
    "Good morning",
    "hello",
    "Good afternoon",
    "bye",
    "good evening",
    "hi"

]
const btn = document.querySelector(".btn")
const container = document.querySelector(".container")

btn.addEventListener("click",() =>createNotification())

function createNotification(){
    const notificationEl = document.createElement("div")
    notificationEl.classList.add("notification")
    notificationEl.innerText=randomMessage()
    container.appendChild(notificationEl)
    setTimeout(()=>{
    notificationEl.remove()
    },3000)
        
}


function randomMessage(){
    return message[Math.floor(Math.random()*message.length)]
}
