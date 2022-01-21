// intialize the count as 0

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
console.log(countEl)
let count = 0
// listen for clicks on the increment button
function increment(){
    count++ // increment the count variable when the button is clicked 
    countEl.textContent = count
    console.log(count)
}

function save() {
    let entries = count + " - "
    saveEl.textContent += entries
    
    count = 0
    countEl.textContent = count
}




