
const btnCalcular = document.getElementById("btn-calcular"); //botão

const formulario = document.querySelector('.form') //formulario

//alert
const box = document.querySelector('.box')
let resultado = document.getElementById('resultado');


let back = document.getElementById('btn-back');




function calculoImc(event){
    event.preventDefault();

    const resultado = document.getElementById('resultado');

    let kilos = +formulario.kilos.value.replace(',','.');
    let centimetros = +formulario.centimetros.value / 100 .toFixed(2);


    let imc = Number(kilos/(centimetros*centimetros)).toFixed(2);

    resultado.innerText = imc;
    resultado.style.display='block';

    back.onclick = function(){
        box.style.display='none'
    }


            if (imc < 18.5){
                comment.style.color='#2883d2';
                comment.textContent = "Abaixo do peso";
                console.log(comment)
        
                box.style.display='flex';
                box.style.backgroundColor="#c3e3ff";
                resultado.style.color='#2883d2';
            } 
            
            else if(imc >= 18.6 && imc <= 24.9 ){
                comment.style.color='#28d269';
                comment.textContent = "Peso ideal";
                console.log(comment)
        
                box.style.display='flex';
                box.style.backgroundColor="#c3ffde";
                resultado.style.color='#28d269';
            }
        
            else if(imc >= 25 && imc <= 29.9){
                comment.style.color='#ccd228';
                comment.textContent = "Sobrepeso";
                console.log(comment)
        
                box.style.display='flex';
                box.style.backgroundColor="#f6ffc3";
                resultado.style.color='#ccd228';
            }
        
            else if(imc >= 30 && imc <= 34.9){
                comment.style.color='#d29c28';
                comment.textContent = "Obesidade grau 1";
                console.log(comment)
        
                box.style.display='flex';
                box.style.backgroundColor="#ffefc3";
                resultado.style.color='#d29c28';
            }
        
            else if(imc >= 35 && imc <= 39.9){
                comment.style.color='#d27528';
                comment.textContent = "Obesidade grau 2";
                console.log(comment)
        
                box.style.display='flex';
                box.style.backgroundColor="#ffe1c3";
                resultado.style.color='#d27528';
            }
        
            else if(imc >= 40){
                comment.style.color='#d22e28';
                comment.textContent = "Obesidade grau 2";
                console.log(comment)
        
                box.style.display='flex';
                box.style.backgroundColor="#ffcfc3";
                resultado.style.color='#d22e28';
            }
}
btnCalcular.addEventListener('click', calculoImc)


const btnFundo = document.querySelector('.theme-back');
const btnBol = document.querySelector('.theme-bol');
const backGround = document.querySelector('.section');
const label = document.getElementById('label')
const label2 = document.getElementById('label2')
const tema = document.getElementById('tema')

btnBol.onclick = function(){
    btnBol.style.left="59%";
    btnFundo.style.backgroundColor="white";
    backGround.style.backgroundColor="#1c1c1c"
    label.style.color="white";
    label2.style.color="white";
    tema.style.color="white";
}




