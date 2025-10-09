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
    let listItems = ""

    for(let i=0; i<myLeads.length; i++){
        listItems += "<li>" + myLeads[i] + "</li>"
        itemsClass.innerHTML = listItems
        console.log(myLeads[i])
    }
})
