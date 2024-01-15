var botao = document.getElementById("botao")
botao.addEventListener("click", verificar)

function verificar(){
    var formulario = document.getElementById("form")
    var ano_nasc_string = formulario.elements["anoNasc"].value
    var sexo = formulario.elements["sexo"].value
    var resposta = document.getElementById("resultado")
    var ano_atual = new Date().getFullYear()
    ano_nasc = Number(ano_nasc_string)

    var idade = ano_atual - ano_nasc
    if(ano_nasc_string.length == 0 || ano_nasc > ano_atual){
        window.alert("Dados incorretos, tente novamente!")
    }else{
        var img = document.createElement("img")
        img.setAttribute('id','foto')
        var ident
        if(sexo == "Masculino"){
            if(idade >=0 && idade <= 5){
                ident = 'bebe'
                img.setAttribute('src', 'imagens/bebehomem.png')
            }
            else if(idade > 5 && idade <= 11){
                ident = 'criança'
                img.setAttribute('src', 'imagens/criancahomem.png')
            }
            else if(idade > 11 && idade <= 21){
                ident = 'jovem'
                img.setAttribute('src', 'imagens/jovemhomem.png')
            }
            else if(idade > 21 && idade < 60){
                ident = 'adulto'
                img.setAttribute('src', 'imagens/adultohomem.png')
            }
            else{
                ident = 'senhor'
                img.setAttribute('src', 'imagens/velhohomem.png')
            }
            resposta.innerHTML = (`Detectamos um ${ident} com ${idade} anos`)

        }else{
            if(idade >=0 && idade <= 5){
                ident = 'bebe'
                img.setAttribute('src', 'imagens/bebemulher.png')
            }
            else if(idade > 5 && idade <= 11){
                ident = 'criança'
                img.setAttribute('src', 'imagens/criancamulher.png')
            }
            else if(idade > 11 && idade <= 21){
                ident = 'jovem'
                img.setAttribute('src', 'imagens/jovemmulher.png')
            }
            else if(idade > 21 && idade < 60){
                ident = 'adulta'
                img.setAttribute('src', 'imagens/adultomulher.png')
            }
            else{
                ident = 'senhora'
                img.setAttribute('src', 'imagens/velhamulher.png')
            }
            resposta.innerHTML = (`Detectamos uma ${ident} com ${idade} anos`)

        }
    }
    resposta.appendChild(img)
    
}

