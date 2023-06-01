let currentTotal = '';
let currentInput = '';
let lastOperator = '';

var allButtons = document.getElementsByTagName('button')
var display = document.getElementById('display')

for(let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener("click", function(event) {
        throw new Error("This error is you pressed a button!")

        //const b is the button we clicked
        const b = event.target;

        //logic for when we hit a number
        if (b.classList.contains("number")){
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
            if (b.value === '=' && !lastOperator) { 
                //this condition was needed to fix "=" bug
                //when we click on equals numbers are now their own value
            } else if (b.value === "clear"){
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
                }
                currentInput = '';
                if (b.value === "=") { 
                    lastOperator = '';
                } else {
                    lastOperator = b.value;
                }
            } else if (lastOperator && !currentInput) {
                lastOperator = b.value;
            } else {
                //throw error
            }
        } else {
            //throw error
        }

        display.value = currentTotal + lastOperator + currentInput;
        
        // console.log({value: event.target.value, currentInput,lastOperator, currentTotal});
    })
  }