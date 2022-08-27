// window.confirm("Works")
// console.log("con works")


let btn = document.querySelector('button')

btn.addEventListener('click',function () {
    // window.confirm("Works")
    let weight = document.getElementById('weight').value
    let height = document.getElementById('height').value

    // console.log(weight)
    // console.log(height)
    // window.confirm(weight)
    // window.confirm(height)

    if(weight=="" || height==""){
        window.alert("Please Enter Values")
        return;
    }
    weight = Number(weight)
    height = Number(height)
    let calc = weight/(height*height/10000)
    let BMI = document.getElementById("bmi")
    BMI.innerHTML = calc.toFixed(1)

})