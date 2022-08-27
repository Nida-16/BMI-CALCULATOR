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
    let bmi = weight/(height*height/10000)

    let BMI = document.getElementById("bmi")
    let Category = document.getElementById("category")

    if(bmi<18.5){
        Category.innerHTML = "Underweight"
    }
    else if (18.5<=bmi<=24.9 ){
        Category.innerHTML = "Normal Weight"
    }
    else if (25<=bmi<29.9 ){
        Category.innerHTML = " Pre Obesity"
    }
    else if (30<=bmi<34.9 ){
        Category.innerHTML = "Obesity Class I"
    }
    else if (35<=bmi<39.9){
        Category.innerHTML = "Obesity Class II"
    }
    else{
        Category.innerHTML = "Obesity Class III"
    }

    BMI.innerHTML = bmi.toFixed(1)



})