function isDigit(n) {
    return /^\d+$/.test(n)
}

function validacao(classe,tamanho){
    var a = document.querySelector(classe).value

    if( a.length == tamanho){

        if( isDigit(a) == true){
            return true
            
        }else{
            return false
        }

    }else{
        return false
    }
}

function validacao_tel(classe){
    var a = document.querySelector(classe).value

    if( a.length >= 10 || a.length <= 11){

        if( isDigit(a) == true){
            return true
            
        }else{
            return false
        }

    }else{
        return false
    }
}

function validacao_letra_numero(classe,tamanho){
    var a = document.querySelector(classe).value

    if( a.length == tamanho){
        return true
            
    }else{
        return false
    }
}
function validacao_email(classe){
    var a = document.querySelector(classe).value

    if( a.includes("@")  == true ){
        return true
            
    }else{
        return false
    }
}


function enviar(){

    // RG 9
    valido_rg = validacao(".rg_input",9)
    if(valido_rg == false){
        alert("Porfavor verifique seu RG e tente novamente!")
    }


    //telefone - 10
    valido_fixo_tel = validacao_tel(".telefone_input")
    if(valido_fixo_tel == false ){
        alert("Porfavor verifique seu telefone fixo e tente novamente!")
    }

    //telefone - 11
    valido_cel_tel = validacao_tel(".telefone_input")
    if(valido_tel == false ){
        alert("Porfavor verifique seu telefone celular e tente novamente!")
    }

    //cpf - 11
    valido_cpf = validacao(".cpf_input",11)
    if(valido_cpf == false){
        alert("Porfavor verifique seu CPF e tente novamente!")
    }

    //passaporte - 7 * 2 letras e 5 numeros
    valido_passaport = validacao_letra_numero(".passaporte_input",7)
    if(valido_passaport == false){
        alert("Porfavor verifique o numero do seu passaporte e tente novamente!")
    }

    //email - @
    valido_email = validacao_email(".email_input")
    if(valido_email == false){
        alert("Porfavor verifique seu email e tente novamente!")
    }

    if( valido_rg == true && valido_fixo_tel == true && valido_cel_tel == true && valido_cpf == true && valido_passaport == true && valido_email == true){
        return true

    }else{
        return false
        
    }

}

//botão de enter confirmar cadastro
$(window).keydown(function(event){
    if(event.keyCode == 13) {
        event.preventDefault();
        enviar();
    }
})



// ------------------------------------------------------------------------------------------------
