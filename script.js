document.querySelector('#one').onclick = function () {
    document.querySelector('.txt').innerHTML += "1"
}

document.querySelector('#two').onclick = function () {
    document.querySelector('.txt').innerHTML += "2"
}

document.querySelector('#three').onclick = function () {
    document.querySelector('.txt').innerHTML += "3"
}

document.querySelector('#four').onclick = function () {
    document.querySelector('.txt').innerHTML += "4"
}

document.querySelector('#four').onclick = function () {
    document.querySelector('.txt').innerHTML += "4"
}

document.querySelector('#five').onclick = function () {
    document.querySelector('.txt').innerHTML += "5"
}

document.querySelector('#six').onclick = function () {
    document.querySelector('.txt').innerHTML += "6"
}

document.querySelector('#seven').onclick = function () {
    document.querySelector('.txt').innerHTML += "7"
}

document.querySelector('#eight').onclick = function () {
    document.querySelector('.txt').innerHTML += "8"
}

document.querySelector('#nine').onclick = function () {
    document.querySelector('.txt').innerHTML += "9"
}

document.querySelector('#zero').onclick = function () {
    document.querySelector('.txt').innerHTML += "0"
}

document.querySelector('#plus').onclick = function () {
    document.querySelector('.txt').innerHTML += "+"
}

document.querySelector('#equal').onclick = function () {
    document.querySelector('.txt').innerHTML += "="
}

document.querySelector('#ex').onclick = function () {
    document.querySelector('.txt').innerHTML += "*"
}

document.querySelector('#minus').onclick = function () {
    document.querySelector('.txt').innerHTML += "-"
}

document.querySelector('#div').onclick = function () {
    document.querySelector('.txt').innerHTML += "/"
}
function calculatePercentage(param) {
    const numbers = param.split('*');
    const num1 = numbers[0];
    const num2 = numbers[1];
    console.log(num1, num2)

    return (num1 * num2) / 100;
}

document.querySelector('#percent').onclick = function () {
    let g = document.querySelector('.txt');
    let result = calculatePercentage(g.textContent);
    document.querySelector('.result').innerHTML = result;
    document.querySelector('.txt').innerHTML += "%"
}

document.querySelector('#point').onclick = function () {
    document.querySelector('.txt').innerHTML += "."
}

document.querySelector('#racine').onclick = function () {
    c=document.querySelector('.txt').textContent
    document.querySelector('.result').innerHTML = Math.sqrt(eval(c))
    document.querySelector('.txt').innerHTML="√"+c
}

document.querySelector('#back').onclick = function () {
    const div = document.querySelector(".txt");
    const content = div.innerHTML;
    const newContent = content.substring(0, content.length - 1);
    div.innerHTML = newContent;
}

document.querySelector('#del').onclick = function () {
    document.querySelector('.txt').innerHTML= ""
    document.querySelector('.result').innerHTML=""
}  

document.querySelector('#equal').onclick = function () {
    let t=document.querySelector('.txt').textContent
    document.querySelector('.result').innerHTML=eval(t)
}