let add = (num1, num2) => {
  return num1 + num2
};

let subtract = (num1, num2) => {
  return num1 - num2
};

let multiply = (num1, num2) => {
  return num1 * num2
};

let divide = (num1, num2) => {
  return num1 / num2
};

let operate = (op, num1 ,num2) => {
  switch (op) {
    case "+":
      return add(num1, num2);
      break;

    case "-":
      return subtract(num1, num2);
      break;

    case "*": 
      return multiply(num1, num2);
      break;

    case "/":
      return divide(num1, num2);
      break;
  }
}

const buttons = document.querySelectorAll('.nmb');

const operator = document.querySelectorAll('.operator');

const equal = document.querySelector('.equal');

const clear = document.querySelector('.clear');

const topResult = document.querySelector('.top');

const bottomResult = document.querySelector('.bottom'); 

const opResult = document.querySelector(".op-screen");

let op = '';

let n1 = '';

let n2 = '';

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', ()=> {
    if (n2 === '') {
      n1 += buttons[i].textContent;
      n1 = parseInt(n1);
      bottomResult.textContent = n1;
    }

    else if (n2 !== '') {
      n2 += buttons[i].textContent;
      n2 = parseInt(n2);
      bottomResult.textContent = n2;
    };
  });
};

for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener('click', ()=> {
    op = operator[i].textContent;
    opResult.textContent = op;
    topResult.textContent = n1;
    bottomResult.textContent = '';
    n2 = 0;
  });
};

equal.addEventListener('click', ()=> {
  topResult.textContent = '';
  n1 = operate(op, n1, n2)
  bottomResult.textContent = n1;
});

clear.addEventListener('click', ()=> {
  op = '';
  n1 = '';
  n2 = '';
  bottomResult.textContent = '';
  topResult.textContent = ''
  opResult.textContent = '';
})