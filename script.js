const selectNode = (elementId) => {
    return document.querySelector(elementId)
}

const plusNode = selectNode('#plus')
const minusNode = selectNode('#minus')
const countTxt = selectNode('#counter')
const incCheckbox = selectNode('#incCheck')
const incFreq = selectNode('#incFreq')
const output = selectNode('output')

const createEventListener = (node, event, func) => {
    node.addEventListener(event, func);
}

createEventListener(plusNode, "click", e => {
    counter += 1;
    renderValueInNode(countTxt, counter);
})

createEventListener(minusNode, "click", e => {
    counter -= 1;
    renderValueInNode(countTxt, counter);
})

const renderValueInNode = (node, value) => {
    node.innerText = `${value}`
}

let counter = 0;
renderValueInNode(countTxt, counter);

let intervalId = null;

createEventListener(incCheckbox, "change", e => {
    if (e.target.checked) {
        intervalId = setInterval(() => {
            counter += 1;
            renderValueInNode(countTxt, counter);
        }, 1000 / incrementFrequency);
    } else {
        clearInterval(intervalId);
        intervalId = null;
    }
})

let incrementFrequency = 1;
renderValueInNode(output, incrementFrequency)

createEventListener(incFreq, "change", e => {
    incrementFrequency = +e.target.value;
    renderValueInNode(output, incrementFrequency)

    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = setInterval(() => {
            counter += 1;
            renderValueInNode(countTxt, counter);
        }, 1000 / incrementFrequency);
    }
})