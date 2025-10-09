const saveInput = document.getElementById('input-btn')
const showInput = document.getElementById('input-btn2')
const inputFeild = document.getElementById('input-el')
let myLeads = []










saveInput.addEventListener('click', ()=>{
    let input = inputFeild.value
    myLeads.push(input)
    console.log(input)
    inputFeild.value = ""
})

showInput.addEventListener('click', ()=>{
    console.log(myLeads)
})