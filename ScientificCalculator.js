// document.getElementsByClassName(className) returns a collection of elements with the metioned class.
// To access any specific element of this class, we need to specify its index within the collection,
// everytime we are targetting that element. For ex: input[0], input[1] or output[0].
// And if we want to target only one specific element of the collection, we can hardcode its
// index beside the getElementsByClassName(className) expression. For ex: there was only 1 and only element
// in the 'output' class to be targetted, so we hardcoded document.getElementsByClassName('output')[0].
const input = document.getElementsByClassName('input');
const output = document.getElementsByClassName('output')[0];
let currentValue = "0";   // an empty string to track the current value in the output

const buttonClicked = (event) => {
    // Code for mouseclick handling. 'event.target' refers to the element(in our code, the div)
    // that triggered the 'click' event to call 'buttonClicked' function(event handler)
    const clickedValue = event.target.innerHTML;
    updateOutput(clickedValue);
}

let toggleClicks1 = 0;
let toggleClicks2 = 0;
let MeasureOfAngle = "deg";
let historyArray = [];
let clearCurrentValue = false;
let exponentNclicked = false;

const updateOutput = (value) => {
    if(value === "🔁") {
        toggleClicks1++;
        if(toggleClicks1%2 === 1) {
            document.getElementById('box-19').innerHTML = 'sin<sup><sup>-1</sup></sup>';
            document.getElementById('box-20').innerHTML = 'cosec<sup><sup>-1</sup></sup>';
            document.getElementById('box-28').innerHTML = 'cos<sup><sup>-1</sup></sup>';
            document.getElementById('box-29').innerHTML = 'sec<sup><sup>-1</sup></sup>';
            document.getElementById('box-37').innerHTML = 'tan<sup><sup>-1</sup></sup>';
            document.getElementById('box-38').innerHTML = 'cot<sup><sup>-1</sup></sup>';
            currentValue = currentValue;
        } else {
            document.getElementById('box-19').innerHTML = 'sin';
            document.getElementById('box-20').innerHTML = 'cosec';
            document.getElementById('box-28').innerHTML = 'cos';
            document.getElementById('box-29').innerHTML = 'sec';
            document.getElementById('box-37').innerHTML = 'tan';
            document.getElementById('box-38').innerHTML = 'cot';
            currentValue = currentValue;
        }
    } else if(value === "toggClick2"){
        toggleClicks2++;
        if(toggleClicks2%2 === 0){
            MeasureOfAngle = "deg";
        } else {
            MeasureOfAngle = "rad";
        }
        currentValue = currentValue;
    } else if(typeof value === 'undefined') {   
        return;   // prevents 'undefined' coming in output screen, when user clicks on toggle button 2's background
        currentValue = currentValue;
    } else if(value === "AC") {
        currentValue = "0";
        historyArray.splice(0);   // empty historyArray if user clicks 'AC'
    } else if(value === "CE") {
        currentValue = "0";
        historyArray.push(currentValue);
    } else if(value === "←") {
        // After we click '=', the eval() function changes the string to a number. In this case, if
        // we press backspace, it won't work because slice() does not work on numbers. 
        // So, if 'currentValue' is not a string, we make sure it is converted into string,
        // so that slice() function can work properly
        if(typeof currentValue !== 'string') {
            currentValue = String(currentValue);   // String() constructor converts a non-string value to a string
        }
        // Removing the last character from the current value.
        // slice(0, -1) extracts a substring from the original string, starting from
        // the first character (0) and ending at the character before the last character (-1).
        currentValue = currentValue.slice(0, -1);
    } else if(value === "x<sup><sup>-1</sup></sup>") {
        currentValue = eval(currentValue);
        if(isNaN(currentValue)) {
            historyArray.push(currentValue);
            currentValue = "Error";
            clearCurrentValue = true;
            console.log(clearCurrentValue);
        } else {
            
            currentValue = 1/currentValue;
            historyArray.push(currentValue);
        }
    } else if(value === "!") {
        num = eval(currentValue);
        //num = parseFloat(currentValue);   // converting string to number  
        // Check if the number is a positive integer
        if (num%1 === 0 && num >= 0) {
            currentValue = factorial(num);
            historyArray.push(currentValue);
        } else {
            // Show an error message if the input is invalid
            historyArray.push(currentValue);
            currentValue = "Error";
            clearCurrentValue = true;
        }
    } else if(value === "^") {
        currentValue = eval(currentValue);
        if(isNaN(currentValue)) {
            historyArray.push(currentValue);
            currentValue = "Error";
            clearCurrentValue = true;
        } else {
            currentValue = `${currentValue}${value}`;
        }
    } else if(value === "x<sup><sup>3</sup></sup>") {
        currentValue = eval(currentValue);
        if(isNaN(currentValue)) {
            historyArray.push(currentValue);
            currentValue = "Error";
            clearCurrentValue = true;
        } else {
            currentValue = currentValue**3;
            historyArray.push(currentValue);
        }
    } else if(value === "x<sup><sup>2</sup></sup>") {
        currentValue = eval(currentValue);
        if(isNaN(currentValue)) {
            historyArray.push(currentValue);
            currentValue = "Error";
            clearCurrentValue = true;
        } else {
            currentValue = currentValue**2;
            historyArray.push(currentValue);
        }
    } else if(value === "√") {
        currentValue = eval(currentValue);
        if(isNaN(currentValue)) {
            historyArray.push(currentValue);
            currentValue = "Error";
            clearCurrentValue = true;
        } else {
            currentValue = Math.sqrt(currentValue);
            historyArray.push(currentValue);
        }
    } else if(value === "∛") {
        currentValue = eval(currentValue);
        if(isNaN(currentValue)) {
            historyArray.push(currentValue);
            currentValue = "Error";
            clearCurrentValue = true;
        } else {
            currentValue = Math.cbrt(currentValue);
            historyArray.push(currentValue);
        }
    } else if(value === "<sup><sup>n</sup></sup>√") {
        currentValue = eval(currentValue);
        if(isNaN(currentValue)) {
            historyArray.push(currentValue);
            currentValue = "Error";
            clearCurrentValue = true;
        } else {
            currentValue = `${currentValue}√`;
        }
    } else if(value === "log") {
        currentValue = eval(currentValue);
        if(isNaN(currentValue)) {
            historyArray.push(currentValue);
            currentValue = "Error";
            clearCurrentValue = true;
        } else {
            currentValue = `log(`;
        }
    } else if(value === "ln") {
        currentValue = eval(currentValue);
        if(isNaN(currentValue)) {
            historyArray.push(currentValue);
            currentValue = "Error";
            clearCurrentValue = true;
        } else {
            currentValue = `ln(`;
        }
    } else if(value === "e") {
        currentValue = `${currentValue}${eval("Math.E")}`;
        if(currentValue[0] === "0") {
            currentValue = currentValue.slice(1);
        }
        historyArray.push(currentValue);
    } else if(value === "<sup><sup>n</sup></sup>P<sub><sub>r</sub></sub>") {
        currentValue = eval(currentValue);
        if(isNaN(currentValue) || currentValue%1 !== 0) {
            historyArray.push(currentValue);
            currentValue = "Error";
            clearCurrentValue = true;
        } else {
            currentValue = `${currentValue}P`;
        }
    } else if(value === "<sup><sup>n</sup></sup>C<sub><sub>r</sub></sub>") {
        currentValue = eval(currentValue);
        if(isNaN(currentValue) || currentValue%1 !== 0) {
            historyArray.push(currentValue);
            currentValue = "Error";
            clearCurrentValue = true;
        } else {
            currentValue = `${currentValue}C`;
        }
    } else if(value === "sin") {
        currentValue = `sin(`;
    } else if(value === "cos") {
        currentValue = `cos(`;
    } else if(value === "tan") {
        currentValue = `tan(`;
    } else if(value === "cosec") {
        currentValue = `cosec(`;
    } else if(value === "sec") {
        currentValue = `sec(`;
    } else if(value === "cot") {
        currentValue = `cot(`;
    } else if(value === "sin<sup><sup>-1</sup></sup>") {
        currentValue = `sin<sup><sup>-1</sup></sup>(`;
    } else if(value === "cos<sup><sup>-1</sup></sup>") {
        currentValue = `cos<sup><sup>-1</sup></sup>(`;
    } else if(value === "tan<sup><sup>-1</sup></sup>") {
        currentValue = `tan<sup><sup>-1</sup></sup>(`;
    } else if(value === "cosec<sup><sup>-1</sup></sup>") {
        currentValue = `cosec<sup><sup>-1</sup></sup>(`;
    } else if(value === "sec<sup><sup>-1</sup></sup>") {
        currentValue = `sec<sup><sup>-1</sup></sup>(`;
    } else if(value === "cot<sup><sup>-1</sup></sup>") {
        currentValue = `cot<sup><sup>-1</sup></sup>(`;
    } else if(value === "=") {
        if(currentValue.includes("^")) {   // for nth exponents
            num = currentValue.replace("^", "**");
            currentValue = eval(num);
            historyArray.push(currentValue);
        } else if(currentValue.includes("√")) {   // for nth root
            n = currentValue.substring(0, currentValue.indexOf("√"));
            n = eval(n);
            num = currentValue.substring(currentValue.lastIndexOf("√") + 1);
            num = eval(num);
            currentValue = Math.pow(num, (1/n)).toFixed(3);
            if(currentValue%1 === 0) {   // in order remove trailing zeroes after '.'
                currentValue = parseInt(currentValue);
            }
            historyArray.push(currentValue);
        } else if(currentValue.includes("log(")) {   // for log
            currentValue = eval(`Math.${currentValue}/Math.log(10)`).toFixed(3);
            if(currentValue%1 === 0) {   // in order remove trailing zeroes after '.'
                currentValue = parseInt(currentValue);
            }
            historyArray.push(currentValue);
        } else if(currentValue.includes("ln(")) {   // for natural log
            currentValue = currentValue.replace("ln(", "log(");
            currentValue = eval(`Math.${currentValue}`);
            historyArray.push(currentValue);
        } else if(currentValue.includes("P")) {   // for nPr
            n = currentValue.substring(0, currentValue.indexOf("P"));
            r = currentValue.substring(currentValue.lastIndexOf("P") + 1);
            r = eval(r);
            currentValue = permutation(n, r);
            historyArray.push(currentValue);
        } else if(currentValue.includes("C")) {   // for nCr
            n = currentValue.substring(0, currentValue.indexOf("C"));
            r = currentValue.substring(currentValue.lastIndexOf("C") + 1);
            r = eval(r);
            currentValue = combination(n, r);
            historyArray.push(currentValue);
        } else if(currentValue.includes("sin(")) {   // for sin()
            if(MeasureOfAngle==="deg") {
                x = currentValue.substring(currentValue.lastIndexOf("n") + 1);   // extracts '(theeta)' from 'sin(theeta)'
                x = x.replace(/÷/g, '/').replace(/×/g, '*');
                x = eval(x);
                currentValue = Math.sin(x*Math.PI/180).toFixed(3);
                if(currentValue%1 === 0) {   // in order remove trailing zeroes after '.'
                    currentValue = parseInt(currentValue);
                }
                historyArray.push(currentValue);
            } else {
                x = currentValue.substring(currentValue.lastIndexOf("n") + 1);   // extracts '(theeta)' from 'sin(theeta)'
                x = x.replace(/÷/g, '/').replace(/×/g, '*');
                x = eval(x);
                currentValue = Math.sin(x);
                if(currentValue%1 === 0) {   // in order remove trailing zeroes after '.'
                    currentValue = parseInt(currentValue);
                }
                historyArray.push(currentValue);
            }
        } else if(currentValue.includes("cos(")) {   // for cos()
            if(MeasureOfAngle==="deg") {
                x = currentValue.substring(currentValue.lastIndexOf("s") + 1);   // extracts '(theeta)' from 'cos(theeta)'
                x = x.replace(/÷/g, '/').replace(/×/g, '*');
                x = eval(x);
                currentValue = Math.cos(x*Math.PI/180).toFixed(3);
                if(currentValue%1 === 0) {   // in order remove trailing zeroes after '.'
                    currentValue = parseInt(currentValue);
                }
                historyArray.push(currentValue);
            } else {
                x = currentValue.substring(currentValue.lastIndexOf("s") + 1);   // extracts '(theeta)' from 'cos(theeta)'
                x = x.replace(/÷/g, '/').replace(/×/g, '*');
                x = eval(x);
                currentValue = Math.cos(x);
                if(currentValue%1 === 0) {   // in order remove trailing zeroes after '.'
                    currentValue = parseInt(currentValue);
                }
                historyArray.push(currentValue);
            }
        } else if(currentValue.includes("tan(")) {   // for tan()
            if(MeasureOfAngle==="deg") {
                x = currentValue.substring(currentValue.lastIndexOf("n") + 1);   // extracts '(theeta)' from 'tan(theeta)'
                x = x.replace(/÷/g, '/').replace(/×/g, '*');
                x = eval(x);
                currentValue = Math.tan(x*Math.PI/180).toFixed(3);
                if(currentValue%1 === 0) {   // in order remove trailing zeroes after '.'
                    currentValue = parseInt(currentValue);
                }
                if(currentValue === 16331239353195370){
                    currentValue = "infinity";
                    clearCurrentValue = true;
                }
                historyArray.push(currentValue);
            } else {
                x = currentValue.substring(currentValue.lastIndexOf("n") + 1);   // extracts '(theeta)' from 'tan(theeta)'
                x = x.replace(/÷/g, '/').replace(/×/g, '*');
                x = eval(x);
                currentValue = Math.tan(x);
                if(currentValue%1 === 0) {   // in order remove trailing zeroes after '.'
                    currentValue = parseInt(currentValue);
                }
                historyArray.push(currentValue);
            }
        } else if(currentValue.includes("cosec(")) {   // for cosec()
            if(MeasureOfAngle==="deg") {
                x = currentValue.substring(currentValue.lastIndexOf("c") + 1);   // extracts '(theeta)' from 'cosec(theeta)'
                x = x.replace(/÷/g, '/').replace(/×/g, '*');
                x = eval(x);
                currentValue = 1/Math.sin(x*Math.PI/180).toFixed(3);
                if(currentValue%1 === 0) {   // in order remove trailing zeroes after '.'
                    currentValue = parseInt(currentValue);
                }
                if(currentValue === 16331239353195370){
                    currentValue = "infinity";
                    clearCurrentValue = true;
                }
                historyArray.push(currentValue);
            } else {
                x = currentValue.substring(currentValue.lastIndexOf("c") + 1);   // extracts '(theeta)' from 'cosec(theeta)'
                x = x.replace(/÷/g, '/').replace(/×/g, '*');
                x = eval(x);
                currentValue = 1/Math.sin(x);
                if(currentValue%1 === 0) {   // in order remove trailing zeroes after '.'
                    currentValue = parseInt(currentValue);
                }
                historyArray.push(currentValue);
            }
        } else if(currentValue.includes("sec(")) {   // for sec()
            if(MeasureOfAngle==="deg") {
                x = currentValue.substring(currentValue.lastIndexOf("c") + 1);   // extracts '(theeta)' from 'sec(theeta)'
                x = x.replace(/÷/g, '/').replace(/×/g, '*');
                x = eval(x);
                currentValue = 1/Math.cos(x*Math.PI/180).toFixed(3);
                if(currentValue%1 === 0) {   // in order remove trailing zeroes after '.'
                    currentValue = parseInt(currentValue);
                }
                if(currentValue === 16331239353195370){
                    currentValue = "infinity";
                    clearCurrentValue = true;
                }
                historyArray.push(currentValue);
            } else {
                x = currentValue.substring(currentValue.lastIndexOf("c") + 1);   // extracts '(theeta)' from 'sec(theeta)'
                x = x.replace(/÷/g, '/').replace(/×/g, '*');
                x = eval(x);
                currentValue = 1/Math.cos(x);
                if(currentValue%1 === 0) {   // in order remove trailing zeroes after '.'
                    currentValue = parseInt(currentValue);
                }
                historyArray.push(currentValue);
            }
        } else if(currentValue.includes("cot(")) {   // for cot()
            if(MeasureOfAngle==="deg") {
                x = currentValue.substring(currentValue.lastIndexOf("t") + 1);   // extracts '(theeta)' from 'cot(theeta)'
                x = x.replace(/÷/g, '/').replace(/×/g, '*');
                x = eval(x);
                currentValue = 1/Math.tan(x*Math.PI/180).toFixed(3);
                if(currentValue%1 === 0) {   // in order remove trailing zeroes after '.'
                    currentValue = parseInt(currentValue);
                }
                if(currentValue === 6.123233995736766e-17){
                    currentValue = "0";
                    clearCurrentValue = true;
                }
                historyArray.push(currentValue);
            } else {
                x = currentValue.substring(currentValue.lastIndexOf("t") + 1);   // extracts '(theeta)' from 'cot(theeta)'
                x = x.replace(/÷/g, '/').replace(/×/g, '*');
                x = eval(x);
                currentValue = 1/Math.tan(x);
                if(currentValue%1 === 0) {   // in order remove trailing zeroes after '.'
                    currentValue = parseInt(currentValue);
                }
                historyArray.push(currentValue);
            }
        } else if(currentValue.includes("sin<sup><sup>-1</sup></sup>(")) {   // for sin-1()
            if(MeasureOfAngle==="deg") {
                x = currentValue.substring(currentValue.lastIndexOf("(") + 1);   // extracts '(value)' from 'sin-1(value)'
                x = x.replace(/÷/g, '/').replace(/×/g, '*');
                x = eval(`(${x}`);
                currentValue = (Math.asin(x)*180/Math.PI).toFixed(3);
                if(currentValue%1 === 0) {   // in order remove trailing zeroes after '.'
                    currentValue = parseInt(currentValue);
                }
                historyArray.push(currentValue);
            } else {
                x = currentValue.substring(currentValue.lastIndexOf("(") + 1);   // extracts '(value)' from 'sin-1(value)'
                x = x.replace(/÷/g, '/').replace(/×/g, '*');
                console.log(x);
                x = eval(`(${x}`);
                currentValue = Math.asin(x);
                if(currentValue%1 === 0) {   // in order remove trailing zeroes after '.'
                    currentValue = parseInt(currentValue);
                }
                historyArray.push(currentValue);
            }
        } else if(currentValue.includes("cos<sup><sup>-1</sup></sup>(")) {   // for cos-1()
            if(MeasureOfAngle==="deg") {
                x = currentValue.substring(currentValue.lastIndexOf("(") + 1);   // extracts '(value)' from 'cos-1(value)'
                x = x.replace(/÷/g, '/').replace(/×/g, '*');
                x = eval(`(${x}`);
                currentValue = (Math.acos(x)*180/Math.PI).toFixed(3);
                if(currentValue%1 === 0) {   // in order remove trailing zeroes after '.'
                    currentValue = parseInt(currentValue);
                }
                historyArray.push(currentValue);
            } else {
                x = currentValue.substring(currentValue.lastIndexOf("(") + 1);   // extracts '(value)' from 'cos-1(value)'
                x = x.replace(/÷/g, '/').replace(/×/g, '*');
                console.log(x);
                x = eval(`(${x}`);
                currentValue = Math.acos(x);
                if(currentValue%1 === 0) {   // in order remove trailing zeroes after '.'
                    currentValue = parseInt(currentValue);
                }
                historyArray.push(currentValue);
            }
        } else if(currentValue.includes("tan<sup><sup>-1</sup></sup>(")) {   // for tan-1()
            if(MeasureOfAngle==="deg") {
                x = currentValue.substring(currentValue.lastIndexOf("(") + 1);   // extracts '(value)' from 'tan-1(value)'
                x = x.replace(/÷/g, '/').replace(/×/g, '*');
                x = eval(`(${x}`);
                currentValue = (Math.atan(x)*180/Math.PI).toFixed(3);
                if(currentValue%1 === 0) {   // in order remove trailing zeroes after '.'
                    currentValue = parseInt(currentValue);
                }
                historyArray.push(currentValue);
            } else {
                x = currentValue.substring(currentValue.lastIndexOf("(") + 1);   // extracts '(value)' from 'tan-1(value)'
                x = x.replace(/÷/g, '/').replace(/×/g, '*');
                console.log(x);
                x = eval(`(${x}`);
                currentValue = Math.atan(x);
                if(currentValue%1 === 0) {   // in order remove trailing zeroes after '.'
                    currentValue = parseInt(currentValue);
                }
                historyArray.push(currentValue);
            }
        } else if(currentValue.includes("cosec<sup><sup>-1</sup></sup>(")) {   // for cosec-1()
            if(MeasureOfAngle==="deg") {
                x = currentValue.substring(currentValue.lastIndexOf("(") + 1);   // extracts '(value)' from 'cosec-1(value)'
                x = x.replace(/÷/g, '/').replace(/×/g, '*');
                x = eval(`(${x}`);
                currentValue = (Math.asin(1/x)*180/Math.PI).toFixed(3);
                if(currentValue%1 === 0) {   // in order remove trailing zeroes after '.'
                    currentValue = parseInt(currentValue);
                }
                historyArray.push(currentValue);
            } else {
                x = currentValue.substring(currentValue.lastIndexOf("(") + 1);   // extracts '(value)' from 'cosec-1(value)'
                x = x.replace(/÷/g, '/').replace(/×/g, '*');
                console.log(x);
                x = eval(`(${x}`);
                currentValue = Math.asin(1/x);
                if(currentValue%1 === 0) {   // in order remove trailing zeroes after '.'
                    currentValue = parseInt(currentValue);
                }
                historyArray.push(currentValue);
            }
        } else if(currentValue.includes("sec<sup><sup>-1</sup></sup>(")) {   // for sec-1()
            if(MeasureOfAngle==="deg") {
                x = currentValue.substring(currentValue.lastIndexOf("(") + 1);   // extracts '(value)' from 'sec-1(value)'
                x = x.replace(/÷/g, '/').replace(/×/g, '*');
                x = eval(`(${x}`);
                currentValue = (Math.acos(1/x)*180/Math.PI).toFixed(3);
                if(currentValue%1 === 0) {   // in order remove trailing zeroes after '.'
                    currentValue = parseInt(currentValue);
                }
                historyArray.push(currentValue);
            } else {
                x = currentValue.substring(currentValue.lastIndexOf("(") + 1);   // extracts '(value)' from 'sec-1(value)'
                x = x.replace(/÷/g, '/').replace(/×/g, '*');
                console.log(x);
                x = eval(`(${x}`);
                currentValue = Math.acos(1/x);
                if(currentValue%1 === 0) {   // in order remove trailing zeroes after '.'
                    currentValue = parseInt(currentValue);
                }
                historyArray.push(currentValue);
            }
        } else if(currentValue.includes("cot<sup><sup>-1</sup></sup>(")) {   // for cot-1()
            if(MeasureOfAngle==="deg") {
                x = currentValue.substring(currentValue.lastIndexOf("(") + 1);   // extracts '(value)' from 'cot-1(value)'
                x = x.replace(/÷/g, '/').replace(/×/g, '*');
                x = eval(`(${x}`);
                currentValue = (Math.atan(1/x)*180/Math.PI).toFixed(3);
                if(currentValue%1 === 0) {   // in order remove trailing zeroes after '.'
                    currentValue = parseInt(currentValue);
                }
                historyArray.push(currentValue);
            } else {
                x = currentValue.substring(currentValue.lastIndexOf("(") + 1);   // extracts '(value)' from 'cot-1(value)'
                x = x.replace(/÷/g, '/').replace(/×/g, '*');
                console.log(x);
                x = eval(`(${x}`);
                currentValue = Math.atan(1/x);
                if(currentValue%1 === 0) {   // in order remove trailing zeroes after '.'
                    currentValue = parseInt(currentValue);
                }
                historyArray.push(currentValue);
            }
        } else {
            historyArray.push(currentValue);
            currentValue = evaluateExpression(currentValue);
            currentValue = shortenNumber(currentValue);
            historyArray.push(currentValue);
        }      
    } else if(value === "🕒") {
        if(historyArray.length <= 1) {
            return;
        }
        currentValue = historyArray[historyArray.length-2];
        historyArray.pop();
    } else {
        if (currentValue === "0") {
        currentValue = value;   // Removing leading 0(0 on the leftmost value) if current value is "0"
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

    if(clearCurrentValue) {
        currentValue = "0";
        clearCurrentValue = false;
    }
}

const evaluateExpression = (expression) => {
    // Evaluating the expression using the eval() function. But eval() will not be able to parse
    // the meaning of ÷ and ×, as they were not written as / and * in HTML document.
    // To make make eval() parse their meaning, we have to first replace
    // ÷ symbol with / and × symbol with *, then give let the eval() evaluate the string.
    currentValue = currentValue.replace(/÷/g, '/').replace(/×/g, '*');
    try {
        return eval(currentValue);
    } catch(e) {
        return "Error";
    }
}

const evaluateSpecialExpression = (result) => {
    return result;
}

// Adding 'click' event listener to all input buttons at once using for loop, to handle mouseclicks.
for (i=0; i<input.length; i++){
    input[i].addEventListener('click', buttonClicked);
}

// Adding 'click' event listener to toggle button
document.getElementById('box-11').addEventListener('click', (event) => {
    updateOutput(event.target.name);
});

// Attaching 'keydown' event listener to handle keystrokes from keyboard
document.addEventListener('keydown', (event) => {
    // event.key is a property of the KeyboardEvent object that represents the key value of the pressed key
    // during a keyboard event. It provides a string value that corresponds to the physical key on the keyboard.
    const keyPressed = event.key;
    //if any other key other than 0 to 9, c, C, =, /, *, -, +, Backspace are pressed, stop the flow of program.
    // The test() method is a regular expression method that tests whether a given string matches a 
    // specified pattern. It returns true if the pattern is found in the string, and false otherwise.
    if (!/[0-9cC.=/*+-]|(|)|Backspace|Enter/.test(keyPressed)) {
        return;   // When the code encounters the 'return' statement, it immediately exits the current function
    }
    if (keyPressed === 'Enter') {
        updateOutput('=');
    } else if (keyPressed === 'Backspace') {
        updateOutput('←');
    } else if (keyPressed === 'A' || keyPressed === 'a') {
        updateOutput('AC');
    } else if(keyPressed === 'Shift') {
        updateOutput('');   // To type (), we use 'Shift' key. But we don't want 'Shift' string to come on output screen.
    } else {
        updateOutput(keyPressed);
    }
});

function factorial(n) {
    n = parseInt(n);
    if (n === 0 || n === 1) {
        return 1;
    }  
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function permutation(n, r) {
    n = parseInt(n);
    r = parseInt(r);
    if(r>n || n<0 || r<0) {
        return "Error";
        clearCurrentValue = true;
    } else {
        permu = factorial(n) / factorial(n-r);
        return permu;
    }
}

function combination(n, r) {
    n = parseInt(n);
    r = parseInt(r);
    if(r>n || n<0 || r<0) {
        return "Error";
        clearCurrentValue = true;
    } else {
        combi = factorial(n) / (factorial(r)*factorial(n-r));
        return combi;
    }
}

function shortenNumber(number) {
    number = Number(number);
    if(number > 9999999999) {
        const num = number.toFixed(3);
        return num;
    } else if(number > 9999999) {
        const num = number.toFixed(6);
        return num;
    } else if(number > 9999) {
        const num = number.toFixed(9);
        return num;
    } else if(number > 9) {
        const num = number.toFixed(12);
        return num;
    } else {
        const num = number.toFixed(13);
        return num;
    }
}

// Check if Vibration API is supported
if ('vibrate' in navigator) {
    // Get all the calculator buttons
    var buttons = document.getElementsByClassName('box');
    
    // Attach a click event listener to each button
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function() {
        // Vibrate the device for 100 milliseconds
        navigator.vibrate(20);
      });
    }
}
