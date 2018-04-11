document.querySelector('#plus').addEventListener("click", e => {
    counter += 1;
    document.querySelector('#counter').innerText = `${counter}`
})
document.querySelector('#minus').addEventListener("click", e => {
    counter -= 1;
    document.querySelector('#counter').innerText = `${counter}`
})

let counter = 0;