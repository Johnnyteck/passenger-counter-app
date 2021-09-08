let count = 0
let countEl = document.getElementById("count-el")
// let saveEl = document.getElementById("save-el")
let saveEl = document.querySelector("#save-el")



// funtion to count number of passengers entering
function increment() {
    count = count + 1
    countEl.textContent = count
   
}

// funtion to decrement; incase someone entered and decided to illight again before the subway starts moving
function decrement() {
    count = count - 1

    if (count > 0) {
        countEl.textContent = count
    } else{
        count = 0
    }
}

// funtion to save the number of passengers that entered the subway
function save() {
    if (count > 0) {
        // saveEl.textContent += count + " - " 
        saveEl.textContent += `${count} - `
    } else {     
    }

    count = 0
    countEl.textContent = count
}   