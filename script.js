document.querySelector('#plus').addEventListener("click", e => {
    counter += 1;
    renderValueToCounter();
})
document.querySelector('#minus').addEventListener("click", e => {
    counter -= 1;
    renderValueToCounter();
})

const renderValueToCounter = () => {
    document.querySelector('#counter').innerText = `${counter}`
}

let counter = 0;