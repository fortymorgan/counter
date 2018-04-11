const selectNode = (elementId) => {
    return document.querySelector(elementId)
}

const plusNode = selectNode('#plus')
const minusNode = selectNode('#minus')

plusNode.addEventListener("click", e => {
    counter += 1;
    renderValueToCounter();
})

minusNode.addEventListener("click", e => {
    counter -= 1;
    renderValueToCounter();
})

const renderValueToCounter = () => {
    document.querySelector('#counter').innerText = `${counter}`
}

let counter = 0;