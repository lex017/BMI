const counters=document.querySelectorAll(".counter")
counters.forEach(counter=>{
    counter.innerText='0'
    const updatecounter=()=>{
        const target = +counter.getAttribute('data-target')
        const start = +counter.innerText
        const increment = target/200
        if(start<target){
            counter.innerText= `${Math.ceil(start+increment)}`
            setTimeout(updatecounter,1)
        }else{
            counter.innerText=target
        }
    }
    updatecounter()
})