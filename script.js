const selectNode = (elementId) => {
    return document.querySelector(elementId)
}

const plusNode = selectNode('#plus')
const minusNode = selectNode('#minus')
const incCheckbox = selectNode('#incCheck')

const createEventListener = (node, event, func) => {
    node.addEventListener(event, func);
}

createEventListener(plusNode, "click", e => {
    counter += 1;
    renderValueToCounter();
})

createEventListener(minusNode, "click", e => {
    counter -= 1;
    renderValueToCounter();
})

const renderValueToCounter = () => {
    document.querySelector('#counter').innerText = `${counter}`
}

let counter = 0;
renderValueToCounter();

let intervalId

createEventListener(incCheckbox, "change", e => {
    if (e.target.checked) {
        intervalId = setInterval(() => {
            counter += 1;
            renderValueToCounter();
        }, 10);
    } else {
        clearInterval(intervalId);
        intervalId = null;
    }
})