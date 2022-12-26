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

const screen = document.querySelector(".screen");

const operator = document.querySelectorAll('.operator');

let n1 = ''

const clear = document.querySelector('.clear');

let op = ''

clear.addEventListener('click', (() => {
  n1 = ''
  screen.textContent = n1;
}))

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', ()=> {
    n1 += buttons[i].textContent;
    screen.innerHTML = n1;
  })
}

for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener('click', ()=> {
    op = operator[i].textContent
    console.log(op)
    console.log(`primer numero ${n1}`)
    let savedN1 = n1
    n1 = 0;
    console.log(`primer resetado a ${n1} y numero guardado${savedN1}`)
  })
}



