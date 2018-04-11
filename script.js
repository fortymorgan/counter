const selectNode = (elementId) => {
    return document.querySelector(elementId)
}

const plusNode = selectNode('#plus')
const minusNode = selectNode('#minus')

const createEventListener = (node, func) => {
    node.addEventListener("click", func);
}

createEventListener(plusNode, e => {
    counter += 1;
    renderValueToCounter();
})

createEventListener(minusNode, e => {
    counter -= 1;
    renderValueToCounter();
})

const renderValueToCounter = () => {
    document.querySelector('#counter').innerText = `${counter}`
}

let counter = 0;