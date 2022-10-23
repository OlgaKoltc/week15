let result;
let operator;

function add() {
  let number1 = document.getElementById('number1').value;
  let number2 = document.getElementById('number2').value;
  // switch (operator) {
  // case '+':
  // result = +number1 + +number2; 
  // console.log(result);
  // break;
  // }
 
  let result = +number1 + +number2;
  return document.getElementById('result').value = result;
  }

  function subtract() {
    let number1 = document.getElementById('number1').value;
    let number2 = document.getElementById('number2').value;
    let result = +number1 - +number2;
    return document.getElementById('result').value = result;
    }

    function multiply() {
      let number1 = document.getElementById('number1').value;
      let number2 = document.getElementById('number2').value;
      let result = (Number(number1) * Number(number2));
      return document.getElementById('result').value = result;
      }
      
      function divide() {
        let number1 = document.getElementById('number1').value;
        let number2 = document.getElementById('number2').value;
        let result = (Number(number1) / Number(number2));
        if (number2 == 0) {
          alert ("На 0 делить нельзя!");
        }
        return document.getElementById('result').value = result;
        }
        