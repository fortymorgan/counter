const selectNode = (elementId) => {
    return document.querySelector(elementId);
}

const nodes = {
    plusNode: selectNode('#plus'),
    minusNode: selectNode('#minus'),
    countTxt: selectNode('#counter'),
    incCheckbox: selectNode('#incCheck'),
    incFreq: selectNode('#incFreq'),
    incFreqValue: selectNode('#incFreqValue'),
}

const createEventListener = (node, event, func) => {
    node.addEventListener(event, func);
}

createEventListener(nodes.plusNode, "click", e => {
    counter += 1;
    renderValueInNode(nodes.countTxt, counter);
})

createEventListener(nodes.minusNode, "click", e => {
    counter -= 1;
    renderValueInNode(nodes.countTxt, counter);
})

const renderValueInNode = (node, value) => {
    node.innerText = `${value}`;
}

let counter = 0;
renderValueInNode(nodes.countTxt, counter);

let intervalId = null;

createEventListener(nodes.incCheckbox, "change", e => {
    if (e.target.checked) {
        intervalId = setInterval(() => {
            counter += 1;
            renderValueInNode(nodes.countTxt, counter);
        }, 1000 / incrementFrequency);
    } else {
        clearInterval(intervalId);
        intervalId = null;
    }
})

let incrementFrequency = 1;
renderValueInNode(nodes.incFreqValue, incrementFrequency);

createEventListener(nodes.incFreq, "change", e => {
    incrementFrequency = +e.target.value;
    renderValueInNode(nodes.incFreqValue, incrementFrequency);

    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = setInterval(() => {
            counter += 1;
            renderValueInNode(nodes.countTxt, counter);
        }, 1000 / incrementFrequency);
    }
})