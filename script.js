const buttonsList = document.querySelectorAll('.grid-container button');
let inputValue = document.getElementById('input');
let result = 0;
let temp = 0;
let operator = '';
let flag = false;

//reset functionality
function reset() {
    inputValue.value = '';
    temp = 0;
    result = 0;
    operator = '';
}


function performOperation() {
    //case when there is only single value in input
    if (temp == 0) {
        inputValue.value = result;
        flag = true;
        return;
    }

    //perform operation
    if (operator == '+') {
        result += temp;
    } else if (operator == '-') {
        result -= temp;
    } else if (operator == '*') {
        result *= temp;
    } else if (operator == '/') {
        result /= temp;
    }
    temp = 0;
    inputValue.value = result;
    flag = true;
}



function buttonClicked(event) {
    let item = event.target.innerText;

    //if clicked item is = perform operation
    if (item == '=') {
        performOperation();
        return;
    }

    //after click on = button
    //check again clicking on the number or not
    //if it is number again starts from first
    //using flag to check the status
    if (!isNaN(item) && flag) {
        inputValue.value = '';
        result = 0;
        temp = 0;
        operator = '';
    }

    flag = false;

    //check it is operator or not
    if (isNaN(item)) {
        operator = item;
        result += temp;
        console.log(result);
        temp = 0;
        inputValue.value += operator;
        return;
    }

    //append the clicked value into input
    let clickedValue = parseInt(item);
    temp = temp * 10 + clickedValue;
    inputValue.value += clickedValue;
}


buttonsList.forEach(item => {
    item.addEventListener('click', buttonClicked);
})