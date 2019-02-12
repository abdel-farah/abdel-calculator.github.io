
const calculator = {
  valueOnScreen: '0',
  operandOne: null,
  operandTwo: null,
  waitingForSecondOperand: false,
  operator: null,
};

function updateDisplay() {
  const display = document.querySelector('.calculator-screen');
  display.value = calculator.valueOnScreen;
}


$(document).ready(function(){
  $(".number").click(function(){
    if(calculator.valueOnScreen == '0'){
        calculator.valueOnScreen = $(this).text()
        updateDisplay();
  	}
    else{
    calculator.valueOnScreen = calculator.valueOnScreen + $(this).text()
    updateDisplay();
    }
  });
});