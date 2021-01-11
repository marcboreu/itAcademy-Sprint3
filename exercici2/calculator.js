var num1 = 0;
var num2 = 0;
var operator;

const setNumber = (number) => {
    if(num1 == 0 && num1 !== '0.'){
        num1 = number;
    }else{
        num1 += number;
    }
    reset();
}

const comma = () => {
    if(num1 == 0) {
        num1 = '0.';
    } else if(num1.indexOf('.') == -1) {
        num1 += '.';
    }
    reset();
}

const erase = () => {
    num1 = 0;
    num2 = 0;
    reset();
}

const operation = (value) => {
    if (num1 == 0){
        num1 = parseFloat(document.getElementById("valueNumber").value);
    }
    num2 = parseFloat(num1);
    num1= 0;
    operator = value;
}


const isEqual = () => {
    num1 = parseFloat(num1);
    switch (operator){
        case 1:
            num1 += num2;
        break;
        case 2:
            num1 = num2 - num1;
        break;
        case 3:
            num1 *= num2;
        break;
        case 4:
            num1 = num2 / num1;
        break;
        case 5:
            num1 = Math.pow(num2, num1);
        break;
    }
    reset();
    num2 = parseFloat(num1);
    num1 = 0;
}

const reset = () => document.getElementById("result").value = num1;