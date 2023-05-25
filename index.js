let currentTotal = '';
let currentInput = '';
let lastOperator = '';

var allButtons = document.getElementsByTagName('button')
var display = document.getElementById('display')

for(let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener("click", function(event) {
        const b = event.target;

        // to do: handle state after equals "="
        if (b.classList.contains("number")){
            console.log("is number")
            if (currentTotal && !lastOperator){
                currentTotal = '';
                
            }
            if (currentInput){
                currentInput = currentInput + b.value
            } else {
                currentInput = b.value
            }
            //logic for when we type an operator
        } else if (b.classList.contains("operator")) {
            if (b.value === "clear"){
            currentTotal = '';
            lastOperator = '';
            currentInput = '';

            } else if (currentTotal && !lastOperator){
                lastOperator = b.value
            } else if (!lastOperator) {
                currentTotal = currentInput;
                currentInput = '';
                lastOperator = b.value;
        

            } else if (lastOperator && currentInput){
                switch(lastOperator) {
                    //add case for when operator was clear
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
                currentInput = '';
                if (b.value === "=") { 
                    lastOperator = '';
                } else {
                    lastOperator = b.value;
                }
            } else if (lastOperator && !currentInput) {
                lastOperator = b.value;
            }
            else {

            }
        } else {
            //throw error
        }

        display.value = currentTotal + lastOperator + currentInput;
        
        console.log({value: event.target.value, currentInput,lastOperator, currentTotal});
    })
  }