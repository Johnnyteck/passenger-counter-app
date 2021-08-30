let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

// console.log(countEl)

function increment() {
    count = count + 1
    countEl.innerText = count
   
}

function decrement() {
    count = count - 1
    countEl.innerText = count
    if (count > 0) {
        countEl.innerText = count
    } else{
        count = 0
        countEl.innerText = count
    }
}

function save() {
    saveEl.innerText += " " + count + " - "
    
    count = 0
    countEl.innerText = count
}