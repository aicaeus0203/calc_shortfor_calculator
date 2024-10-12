const btn1 = document.querySelector("#one");
const btn2 = document.querySelector("#two");
const btn3 = document.querySelector("#three");
const btn4 = document.querySelector("#four");
const btn5 = document.querySelector("#five");
const btn6 = document.querySelector("#six");
const btn7 = document.querySelector("#seven");
const btn8 = document.querySelector("#eight");
const btn9 = document.querySelector("#nine");
const btn0 = document.querySelector("#zero");
const result = document.querySelector("#display");
let tempNum;
let total = '';
let computeArr = [];
let arrCounter = 0;
btn1.addEventListener("click",()=> {
    total += '1';
    result.innerHTML = total;
})
btn2.addEventListener("click",()=> {
    total += '2';
    result.innerHTML = total;
})
btn3.addEventListener("click",()=> {
    total += '3';
    result.innerHTML = total;
})
btn4.addEventListener("click",()=> {
    total += '4';
    result.innerHTML = total;
})
btn5.addEventListener("click",()=> {
    total += '5';
    result.innerHTML = total;
})
btn6.addEventListener("click",()=> {
    total += '6';
    result.innerHTML = total;
})
btn7.addEventListener("click",()=> {
    total += '7';
    result.innerHTML = total;
})
btn8.addEventListener("click",()=> {
    total += '8';
    result.innerHTML = total;
})
btn9.addEventListener("click",()=> {
    total += '9';
    result.innerHTML = total;
})
btn0.addEventListener("click",()=> {
    total += '0';
    result.innerHTML = total;
})

document.addEventListener('keydown', function (e){
    if (e.key =='0'){
        total += '0';
        result.innerHTML = total;
    }
    if (e.key =='1'){
        total += '1';
        result.innerHTML = total;
    }
    if (e.key =='2'){
        total += '2';
        result.innerHTML = total;
    }
    if (e.key =='3'){
        total += '3';
        result.innerHTML = total;
    }
    if (e.key =='4'){
        total += '4';
        result.innerHTML = total;
    }
    if (e.key =='5'){
        total += '5';
        result.innerHTML = total;
    }
    if (e.key =='6'){
        total += '6';
        result.innerHTML = total;
    }
    if (e.key =='7'){
        total += '7';
        result.innerHTML = total;
    }
    if (e.key =='8'){
        total +='8';
        result.innerHTML = total;
    }
    if (e.key =='9'){
        total += '9';
        result.innerHTML = total;
    }
    if(e.key =='Backspace'){
        total = total.slice(0,-1)
        result.innerHTML = total;
    }
    if(e.key == '+'){
        computeArr[arrCounter] = Number(total);
        total = '';
        result.innerHTML = total;
        arrCounter++;
        computeArr[arrCounter] = '+';
        arrCounter++;
    }
    if(e.key == '-'){
        computeArr[arrCounter] = Number(total);
        total = '';
        result.innerHTML = total;
        arrCounter++;
        computeArr[arrCounter] = '-';
        arrCounter++;
    }
    if(e.key == '*'){
        computeArr[arrCounter] = Number(total);
        total = '';
        result.innerHTML = total;
        arrCounter++;
        computeArr[arrCounter] = '*';
        arrCounter++;
    }
    if(e.key == '/'){
        computeArr[arrCounter] = Number(total);
        total = '';
        result.innerHTML = total;
        arrCounter++;
        computeArr[arrCounter] = '/';
        arrCounter++;
    }
    /*if(e.key =='Enter'){
        computeArr[arrCounter] = Number(total);
        total = '';
        arrCounter++;
    }*/

});