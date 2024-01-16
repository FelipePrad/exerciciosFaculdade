var botao = document.getElementById("botao");
botao.addEventListener("click", contar);

function contar() {
    var formulario = document.getElementById("form");
    var inicio = Number(formulario.elements["inicio"].value);
    var fim = Number(formulario.elements["fim"].value);
    var passo = Number(formulario.elements["passo"].value);
    var resposta = document.getElementById("resultado");

    if (isNaN(inicio) || isNaN(fim) || isNaN(passo) || passo === 0) {
        resposta.innerHTML = 'Impossivel contar.. preencha corretamente.'
    } else {
        var contagem = 'Contando: ';
        if(inicio < fim){
            for (var i = inicio; i <= fim; i += passo) {
                contagem += `${i} \uD83D\uDC49 `;
            }
        }else{
            for (var i = inicio; i >= fim; i -= passo) {
                contagem += `${i} \uD83D\uDC49 `;
            }
        }
        contagem += '\uD83D\uDEA9';
        resposta.innerHTML = contagem;
    }
}
