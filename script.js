const selectNode = (elementId) => {
    return document.querySelector(elementId)
}

const plusNode = selectNode('#plus')
const minusNode = selectNode('#minus')
const incCheckbox = selectNode('#incCheck')
const incFreq = selectNode('#incFreq')
const output = selectNode('output')

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

let intervalId = null;

createEventListener(incCheckbox, "change", e => {
    if (e.target.checked) {
        intervalId = setInterval(() => {
            counter += 1;
            renderValueToCounter();
        }, 1000 / incrementFrequency);
    } else {
        clearInterval(intervalId);
        intervalId = null;
    }
})

let incrementFrequency = 1;
output.innerText = `${incrementFrequency}`

createEventListener(incFreq, "change", e => {
    incrementFrequency = +e.target.value;
    output.innerText = `${incrementFrequency}`

    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = setInterval(() => {
            counter += 1;
            renderValueToCounter();
        }, 1000 / incrementFrequency);
    }
})