const celciusIunput = document.getElementById('celcius');
const farenheitInput = document.getElementById('farenheit');
const kelvinInput = document.getElementById('kelvin');
const tempInput = document.querySelectorAll('input');

tempInput.forEach(input=>{
    input.addEventListener("input",(e)=>{
        let tempValue = parseInt(e.target.value);
        let inputName = e.target.name;
        
        if(e.target.value === ""){
            celciusIunput.value=null
            farenheitInput.value=null
            kelvinInput.value=null
            return
        }
        if(inputName === "celcius"){
            //celcius to farenheit
            let farenheit = tempValue *1.8 +32
            farenheitInput.value = farenheit.toFixed(2)

            //c -> k
            let kelvin = tempValue + 273
            kelvinInput.value = kelvin.toFixed(2)
        }else if(inputName === "farenheit"){
            //farenheit to celcius
            let celcius = (tempValue-32)/1.8
            celciusIunput.value = celcius.toFixed(2)

            let kelvin = (tempValue-32)/1.8 + 273
            kelvinInput.value = kelvin.toFixed(2)
        }else if(inputName === "kelvin"){
            //
            let celcius = tempValue-273
            celciusIunput.value = celcius.toFixed(2)

            let farenheit = (tempValue-273)*1.8 + 32
            farenheitInput.value = farenheit.toFixed(2)
        }
    })
})