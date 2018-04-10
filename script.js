document.querySelector('#plus').addEventListener("click", e => {
    counter += 1;
    document.querySelector('#counter').innerHTML = `${counter}`
})
document.querySelector('#minus').addEventListener("click", e => {
    counter -= 1;
    document.querySelector('#counter').innerHTML = `${counter}`
})

let counter = 0;