const selectNode = (elementId) => {
    return document.querySelector(elementId)
}

selectNode('#plus').addEventListener("click", e => {
    counter += 1;
    renderValueToCounter();
})

selectNode('#minus').addEventListener("click", e => {
    counter -= 1;
    renderValueToCounter();
})

const renderValueToCounter = () => {
    document.querySelector('#counter').innerText = `${counter}`
}

let counter = 0;