const btn = document.querySelector(".btn")
const result = document.querySelector(".result")

btn.addEventListener("click", (e) =>{
    e.preventDefault()
    let weight = document.getElementById("weight").value
    let height = document.getElementById("height").value

    if (weight === "" || isNaN(weight)){
        return result.innerHTML = "Please Put a weight"
    }else if (height === "" || isNaN(height)){
        return result.innerHTML = "Please Put a height"
    }else{
        height = height/100
        let bmi = (weight/Math.pow(height,2)).toFixed(2)
        
        if (bmi<18.5){

            showResult(bmi,"Too Thin","blue")
        }else if (bmi>=18.5 && bmi<=24.9){

            showResult(bmi,"Normal","green")
        }else if (bmi>=25 && bmi<=29.9){

            showResult(bmi,"Fat","red")
        }else{
            
            showResult(bmi,"Too Fat","purple")
        }
    }
})

function showResult(bmi,message,color) {
    result.style.backgroundColor = color
    return result.innerHTML = `Result = ${bmi} (${message})`
}