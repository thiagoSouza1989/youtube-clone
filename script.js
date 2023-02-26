// botão like
let contador = document.getElementById('resultado');
let res = contador.innerHTML;
function incrementar() {
    res++;
    contador.innerHTML = parseInt(res);
}

// botão unlike
let contador2 = document.getElementById('resultado2');
let res2 = contador2.innerHTML;
function incrementar2() {
    res2++;
    contador2.innerHTML = parseInt(res2);
}

// botão de inscrição
var inscrever = document.getElementById('inscrito')
    inscrever.addEventListener('click', clicar)

function clicar (){
    inscrever.innerText = 'Inscrito'
    document.body.querySelector('#inscrito').style.background = 'black'
}