const altura = document.getElementById("altura");
const peso = document.getElementById("peso");

const btnCalcular = document.getElementById("btn-calcular"); //botão

const formulario = document.querySelector('.form') //formulario

const resultado = document.getElementById('resultado');


function calculoImc(event){
    event.preventDefault();

    const resultado = document.getElementById('resultado');

    let kilos = +formulario.kilos.value.replace(',','.');
    let centimetros = +formulario.centimetros.value / 100 .toFixed(2);


    let imc = Number(kilos/(centimetros*centimetros)).toFixed(2);

    resultado.innerText = imc;
}

btnCalcular.addEventListener('click', calculoImc)

