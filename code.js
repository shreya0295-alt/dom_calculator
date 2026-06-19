let total=0;
let current="";
let operator=null;
let expression="";
let history =document.getElementById("history");

let display = document.getElementById("display");
console.log(display);
let buttons = document.getElementsByClassName("button");
//console.log(buttons);

let button_7=buttons[4];
button_7.addEventListener('click',()=>{
    current+=button_7.textContent;
    expression+=button_7.textContent;
    console.log('value of currents->',current);
    display.textContent = expression;
})

let button_8=buttons[5];
button_8.addEventListener('click',()=>{
    current+=button_8.textContent;
    expression+=button_7.textContent;
    console.log('value of currents->',current);
    display.textContent = expression;
})

let button_9=buttons[6];
button_9.addEventListener('click',()=>{
    current+=button_9.textContent;
    console.log('value of currents->',current);
    expression+=button_7.textContent;
    display.textContent = expression;
})

let  button_multiply=buttons[7];
button_multiply.addEventListener('click',()=>{
    if (current !== "") {
        if (operator === null) {
            total = Number(current);
        } else if (operator === "+") {
            total += Number(current);
        } else if (operator === "-") {
            total -= Number(current);
        } else if (operator === "*") {
            total *= Number(current);
        }
    }
    operator = button_multiply.textContent;
    current = "";
    console.log("Operator ->", operator);
    expression+=button_multiply.textContent;
    display.textContent = expression;
});


let button_4=buttons[8];
button_4.addEventListener('click',()=>{
    current+=button_4.textContent;
    console.log('value of currents->',current);
    display.textContent = expression;
})

let button_5=buttons[9];
button_5.addEventListener('click',()=>{
    current+=button_5.textContent;
    console.log('value of currents->',current);
    display.textContent = expression;
})

let button_6=buttons[10];
button_6.addEventListener('click',()=>{
    current+=button_6.textContent;
    console.log('value of currents->',current);
    display.textContent = expression;
})

let  button_subtraction=buttons[11];
button_subtraction.addEventListener('click',()=>{
    if (current !== "") {
        if (operator === null) {
            total = Number(current);
        } else if (operator === "+") {
            total += Number(current);
        } else if (operator === "-") {
            total -= Number(current);
        } else if (operator === "*") {
            total *= Number(current);
        }
    }
    operator = button_subtraction.textContent;
    current = "";
    console.log("Operator ->", operator);
    expression+=button_subtraction.textContent;
    display.textContent = expression;
});

let button_1=buttons[12];
button_1.addEventListener('click',()=>{
    current+=button_1.textContent;
    console.log('value of currents->',current);
    display.textContent = expression;
});

let button_2=buttons[13];
button_2.addEventListener('click',()=>{
    current+=button_2.textContent;
    console.log('value of currents->',current);
    display.textContent = current;
});

let button_3=buttons[14];
button_3.addEventListener('click',()=>{
    current+=button_3.textContent;
    console.log('value of currents->',current);
    display.textContent = current;
});

let  button_plus=buttons[15];
button_plus.addEventListener('click',()=>{
    if (current !== "") {
        if (operator === null) {
            total = Number(current);
        } else if (operator === "+") {
            total += Number(current);
        } else if (operator === "-") {
            total -= Number(current);
        } else if (operator === "*") {
            total *= Number(current);
        }
    }
    operator = button_plus.textContent;
    current = "";
    console.log("Operator ->", operator);
    expression+=button_plus.textContent;
    display.textContent = "";
});

let button_zero = buttons[16];
button_zero.addEventListener('click', () => {
    current += "0";
    display.textContent = current;
    console.log("operator ->", operator);
    display.textContent = current;
});

let button_double_zero = buttons[17];
button_double_zero.addEventListener('click', () => {
    current += "00";
    display.textContent = current;
    console.log("operator ->", operator);
    display.textContent = expression;
});

let button_dot = buttons[18];
button_dot.addEventListener('click', () => {
    current += ".";
    display.textContent = current;
    console.log("operator ->", operator);
    display.textContent = expression;
});

let button_AC =buttons[0];
button_AC.addEventListener("click", () => {
    total = 0;
    current = "";
    operator = null;

    console.log("All clear ->", total, current, operator);
    expression+= button_AC.textContent;
    display.textContent = 0;
});

let button_DEL=buttons[1];
button_DEL.addEventListener('click',()=>{
    current =current.slice(0,-1);
    console.log('deleate one value->',current);
    expression+=button_DEL.textContent;
    display.textContent = current;
})
    
let button_parsent=buttons[2];
button_parsent.addEventListener('click',()=>{
    total = Number(current);
    current = "";
    operator = "%";
    console.log("operator ->", operator);
    display.textContent = total + "%";
});

let button_devide=buttons[3];
button_devide.addEventListener('click',()=>{
    current+=button_devide.textContent;
    console.log('value of currents->',current);
    display.textContent = expression;
});

let button_equal = buttons[19];
button_equal.addEventListener('click',()=> {
    if(operator==="+"){
        total+=Number(current);
        console.log(total);
    }
    if(operator==="-"){
        total-=Number(current);
        console.log(total);
    }
    if(operator==="*"){
        total*=Number(current);
        console.log(total);
    }
    if(operator === "%"){
        total = (total * Number(current)) / 100;
        console.log(total);
    }
    display.textContent = total;  
    current = "";                 
    operator = null;
});