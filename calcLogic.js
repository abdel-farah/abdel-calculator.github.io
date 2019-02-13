
const calculator = {
  valueOnScreen: '0',
  operandOne: null,
  operator: null,
  valueOnResultScreen: '0',
  result: '0',
  decimalUsed: false,
};

function updateDisplay() {
  const display = document.querySelector('.calculator-screen');
  const resultScreen = document.querySelector('.calculator-result');
  display.value = calculator.valueOnScreen;
  resultScreen.value = calculator.valueOnResultScreen;
}

function resetDisplay(){
  calculator.valueOnScreen = '0';
  updateDisplay();
}

$(document).ready(function(){
  $(".number").click(function(){
    if(calculator.valueOnScreen == '0' || calculator.valueOnResultScreen == calculator.valueOnScreen ){
        calculator.valueOnScreen = $(this).text()
        updateDisplay();
  	}

    else{
    calculator.valueOnScreen = calculator.valueOnScreen + $(this).text()
    updateDisplay();
    }
  });

  $(".operator").click(function(){
      
      calculator.operandOne = calculator.valueOnScreen;
      calculator.operator = $(this).val();
      calculator.valueOnScreen = calculator.valueOnScreen + $(this).val();
      updateDisplay();
      console.log(calculator);
  });

  $(".bracket").click(function(){
     if(calculator.valueOnScreen == '0' ){
        calculator.valueOnScreen = $(this).text()
        updateDisplay();
    }

    else{
    calculator.valueOnScreen = calculator.valueOnScreen + $(this).text()
    updateDisplay();
    }
  });
  
  $(".equal").click(function(){
    try{
      calculator.result = eval(calculator.valueOnScreen);
      calculator.valueOnScreen = calculator.result;
      calculator.valueOnResultScreen = calculator.result;
      updateDisplay();
    }
    catch(err){
      calculator.valueOnScreen = "ERROR";
      updateDisplay();
    }
  
  });

  $(".decimal").click(function(){
     if(calculator.valueOnResultScreen == calculator.valueOnScreen ){
        calculator.valueOnScreen = $(this).text()
        updateDisplay();
    }
    else{
      calculator.valueOnScreen = calculator.valueOnScreen + $(this).text()
      updateDisplay();
    }

  });
  $(".clearAll").click(function(){
    if (calculator.valueOnScreen == "ERROR") {
      resetDisplay();
    }
    try{
    calculator.valueOnScreen = calculator.valueOnScreen.slice(0, -1);
    updateDisplay();
    console.log(calculator);
    }
    catch(err){
      resetDisplay();
    }
  })

});