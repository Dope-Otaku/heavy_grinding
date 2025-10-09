const saveInput = document.getElementById('input-btn')
const showInput = document.getElementById('input-btn2')
const clearStorage = document.getElementById('input-btn3')
const inputFeild = document.getElementById('input-el')
const itemsClass = document.getElementById('items-class')
let myLeads = []
let count = 0










saveInput.addEventListener('click', ()=>{
    let input = inputFeild.value
    myLeads.push(input)
    count +=1
    localStorage.setItem(`${count}`,`${input}`)
    console.log(input)
    inputFeild.value = ""
})

showInput.addEventListener('click', ()=>{
    let listItems = ""

    for(let i=0; i<myLeads.length; i++){
        listItems += "<li>" + `<a href=${myLeads[i]} target='_blank'>` + myLeads[i] +"</a>" + "</li>"
        itemsClass.innerHTML += listItems
        console.log(localStorage.getItem(`${i}`))
        // console.log(myLeads[i])
    }
})

clearStorage.addEventListener('click', ()=>{
    localStorage.clear()
})
