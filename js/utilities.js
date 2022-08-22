function getInputById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value;
    const inputAmount = parseFloat(inputFieldString);
    return inputAmount;
}
function getTextElementById(elementId){
    const ElementValue = document.getElementById(elementId);
    const ElementValueString = ElementValue.innerText;
    const value = parseFloat(ElementValueString);
    return value;
}
function setTextElementById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
    return element;
}
