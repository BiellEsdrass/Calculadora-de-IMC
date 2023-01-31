const altura = document.getElementById("altura");
const peso = document.getElementById("peso");

const btnCalcular = document.getElementById("btn-calcular"); //botão

const formulario = document.querySelector('.form') //formulario

//alert
let box = document.querySelector('.box')
let resultado = document.getElementById('resultado');




function calculoImc(event){
    event.preventDefault();

    const resultado = document.getElementById('resultado');
    const comentario = document.getElementById('comment');
    const voltar = document.querySelector('.btn-back') ///  COLOCAR UMA FUNÇÃO

    let kilos = +formulario.kilos.value.replace(',','.');
    let centimetros = +formulario.centimetros.value / 100 .toFixed(2);


    let imc = Number(kilos/(centimetros*centimetros)).toFixed(2);

    resultado.innerText = imc;
    resultado.style.display='block';

    if (imc < 18.5){
        comment.style.color='rgb(127, 195, 255)';
        comment.textContent = "Abaixo do peso";
        console.log(comment)

        box.style.display='flex';
        resultado.style.color='rgb(127, 195, 255)';
    } 
    
    else if(imc >= 18.6 && imc <= 24.9 ){
        comment.style.color='#5cef9c';
        comment.textContent = "Peso ideal";
        console.log(comment)

        box.style.display='flex';
        resultado.style.color='#5cef9c';
    }

    else if(imc >= 25 && imc <= 29.9){
        comment.style.color='#fcff4b';
        comment.textContent = "Sobrepeso";
        console.log(comment)

        box.style.display='flex';
        resultado.style.color='#fcff4b';
    }

    else if(imc >= 30 && imc <= 34.9){
        comment.style.color='#cd9b36';
        comment.textContent = "Obesidade grau 1";
        console.log(comment)

        box.style.display='flex';
        resultado.style.color='#cd9b36';
    }

    else if(imc >= 35 && imc <= 39.9){
        comment.style.color='#d0661b';
        comment.textContent = "Obesidade grau 2";
        console.log(comment)

        box.style.display='flex';
        resultado.style.color='#d0661b';
    }

    else if(imc >= 40){
        comment.style.color='#d01b1b';
        comment.textContent = "Obesidade grau 2";
        console.log(comment)

        box.style.display='flex';
        resultado.style.color='#d01b1b';
    }
}



btnCalcular.addEventListener('click', calculoImc)

