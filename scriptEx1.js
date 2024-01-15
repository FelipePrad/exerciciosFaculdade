function carregar(){
    var mensagem = document.getElementById('msg')
    var foto = document.getElementById('foto')
    var dataAtual = new Date()
    var horaAtual = dataAtual.getHours()
    var minutosAtual = dataAtual.getMinutes()
    mensagem.innerHTML = `Agora são ${horaAtual} horas e ${minutosAtual} minutos`


    if(horaAtual >= 5 && horaAtual < 12){
        foto.src = 'imagens/manha.png'
        document.body.style.background = '#d4d2b9'

    }
    else if(horaAtual >= 12 && horaAtual <= 18){
        foto.src = 'imagens/tarde.png'
        document.body.style.background = '#f9a451'
    }
    else{
        foto.src = 'imagens/noite.png'
        document.body.style.background = '#1d1a23'
    }
}

window.addEventListener('load', carregar)


