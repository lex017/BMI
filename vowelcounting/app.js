const countEl = document.querySelector(".count");
const input = document.querySelector("input");

input.addEventListener("keyup", () => {
    let word = input.value.toLocaleLowerCase()
    let vowelcount = 0
    for(let i = 0;i <word.length;i++) {
        let letter = word[i]
        if(letter.match(/([a,e,i,o,u])/)){
            vowelcount++
        }
    }
    countEl.innerHTML = `${vowelcount}`
})
