const saveInput = document.getElementById('input-btn')
const showInput = document.getElementById('input-btn2')
const inputFeild = document.getElementById('input-el')
const itemsClass = document.getElementById('items-class')
let myLeads = []










saveInput.addEventListener('click', ()=>{
    let input = inputFeild.value
    myLeads.push(input)
    console.log(input)
    inputFeild.value = ""
})

showInput.addEventListener('click', ()=>{
    
    for(let i=0; i<myLeads.length; i++){
        itemsClass.innerHTML += "<li>" + myLeads[i] + "</li>"
        console.log(myLeads[i])
    }
})
