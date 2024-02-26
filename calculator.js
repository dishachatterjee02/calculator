// document.getElementsByClassName(className) returns a collection of elements with the metioned class.
// To access any specific element of this class, we need to specify its index within the collection,
// everytime we are targetting that element. For ex: button[0], button[1] or output[0].
// And if we want to target only one specific element of the collection, we can hardcode its
// index beside the getElementsByClassName(className) expression. For ex: there was only 1 and only element
// in the 'output' class to be targetted, so we hardcoded document.getElementsByClassName('output')[0].
const button = document.getElementsByClassName('button');
const output = document.getElementsByClassName('output')[0];
let currentValue = "";   //an empty string to track the current value in the output

const buttonClicked = (event) => {
    // Code for mouseclick handling. 'event.target' refers to the element(in our code, the div)
    // that triggered the 'click' event to call 'buttonClicked' function(event handler)
    const clickedValue = event.target.innerHTML;
    updateOutput(clickedValue);
}

const updateOutput = (value) =>{
    if(value === "C") {
        currentValue = "0";
    } else if (value === "←") {
        // Removing the last character from the current value.
        // slice(0, -1) extracts a substring from the original string, starting from
        // the first character (0) and ending at the character before the last character (-1).
        currentValue = currentValue.slice(0, -1);
    } else if (value === "=") {
        currentValue = evaluateExpression(currentValue).toString();
    } else {
        if (currentValue === "0") {
        // Removing leading 0(0 on the leftmost value) if current value is "0"
        currentValue = value;
        } else {
            // Append the clicked value to the current value
            // When both operands are numbers, the += operator performs numerical addition,
            // but when one of the operands is a string, the += operator performs
            // string concatenation instead of numerical addition. Here 'currentValue' is a string,
            // so resultant would also be a string.
            currentValue += value ;   // currentValue = currentValue + value
        }
    }
    // This is display screen. We are overwriting innerHTML of output with value inside currentValue
    output.innerHTML = currentValue;
}

const evaluateExpression = (expression) => {
    // Evaluating the expression using the eval() function. But eval() will not be able to parse
    // the meaning of ÷ and ×, as they were not written as / and * in HTML document.
    // To make make eval() parse their meaning, we have to first replace
    // ÷ symbol with / and × symbol with *, then give let the eval() evaluate the string.
    // currentValue = currentValue.replace(/÷/g, '/').replace(/×/g, '*');
    // return eval(currentValue);
    const evaluatedResult = eval(expression.replace(/÷/g, '/').replace(/×/g, '*'));
    return evaluatedResult;
}

// Adding 'click' event listener to all buttons at once using for loop, to handle mouseclicks.
for (i=0; i<button.length; i++){
    button[i].addEventListener('click', buttonClicked);
}

// Attaching 'keydown' event listener to handle keystrokes from keyboard
document.addEventListener('keydown', (event) => {
    // event.key is a property of the KeyboardEvent object that represents the key value of the pressed key
    // during a keyboard event. It provides a string value that corresponds to the physical key on the keyboard.
    const keyPressed = event.key;
    //if any other key other than 0 to 9, c, C, =, /, *, -, +, Backspace are pressed, stop the flow of program.
    // The test() method is a regular expression method that tests whether a given string matches a 
    // specified pattern. It returns true if the pattern is found in the string, and false otherwise.
    if (!/[0-9cC.=/*+-]|Backspace|Enter/.test(keyPressed)) {
        return;   // When the code encounters the 'return' statement, it immediately exits the current function
    }
    if (keyPressed === 'Enter') {
        updateOutput('=');
    } else if (keyPressed === 'Backspace') {
        updateOutput('←');
    } else if (keyPressed === 'c' || keyPressed === 'C') {
        updateOutput('C');
    } else {
        updateOutput(keyPressed);
    }
})
