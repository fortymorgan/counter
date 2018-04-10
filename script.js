document.getElementById('plus').addEventListener("click", e => {
    counter += 1;
    document.getElementById('counter').innerHTML = `${counter}`
})
document.getElementById('minus').addEventListener("click", e => {
    counter -= 1;
    document.getElementById('counter').innerHTML = `${counter}`
})

let counter = 0;