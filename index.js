let currentTotal;
let currentInput;
let lastOperator;

var allButtons = document.getElementsByTagName('button')
var display = document.getElementById('display')

for(let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener("click", function(event) {
        const b = event.target;
        if (b.classList.contains("number")){
            console.log("is number")
            if (currentInput){
                currentInput = currentInput + b.value
            } else {
                currentInput = b.value
            }

            if (lastOperator) {
                display.value = currentTotal + lastOperator + currentInput
            } else {
                display.value = currentInput
            }

        } else if (b.classList.contains("operator")) {
            if (!lastOperator) {
                currentTotal = currentInput;
                currentInput = null;
                lastOperator = b.value;
                display.value = currentTotal + b.value

            } else if (lastOperator && currentInput){
                switch(lastOperator) {
                    case "*":
                      currentTotal = Number(currentTotal) * Number(currentInput)
                      break;
                    case "/":
                      currentTotal = Number(currentTotal) / Number(currentInput)
                      break;
                    case "+":
                        currentTotal = Number(currentTotal) + Number(currentInput)
                      break;
                    case "-":
                        currentTotal = Number(currentTotal) - Number(currentInput)
                      break;
                    default:
                        //throw error
                      // code block
                }
                currentInput = null;
                lastOperator = b.value;

            } else if (lastOperator && !currentInput) {
                lastOperator = b.value;
            }
            else {

            }
        } else {
            //throw error
            

        }
        
        console.log({value: event.target.value, currentInput,lastOperator, currentTotal});
    })
  }