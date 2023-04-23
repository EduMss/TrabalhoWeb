$(document).ready(function() {
    var perfil_nome = document.querySelector(".perfil_nome")
    perfil_nome.innerHTML =  nome 

    var input_nome = document.querySelector(".nome_input")
    input_nome.value = nome

    var input_nome = document.querySelector(".rg_input")
    input_nome.value = rg_input

    var input_nome = document.querySelector(".cpf_input")
    input_nome.value = cpf_input

    var input_nome = document.querySelector(".data_nascimeto_input")
    input_nome.value = data_nascimeto_input

    //var input_nome = document.querySelector(".sexo_input")
    document.atualizar_perfil.genero.value=sexo_input;

    var input_nome = document.querySelector(".passaporte_input")
    input_nome.value = passaporte_input

    var input_nome = document.querySelector(".telefone_input")
    input_nome.value = telefone_input

    var input_nome = document.querySelector(".telefone_cel_input")
    input_nome.value = telefone_cel_input

    var input_nome = document.querySelector(".email_input")
    input_nome.value = email_input

    var input_nome = document.querySelector(".senha_input")
    input_nome.value = senha_input


})

// ------------------------------------------------------------------------------------------------

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
        console.log('true')
        return true

    }else{
        console.log('false')
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

function verificar_excluir(){
    //console.log("oie")
    if (confirm("Deseja realemente excluir sua conta ?") == true) {
        //console.log("You pressed OK!");
        return true
      } else {
        //console.log("You canceled!");
        return false
      }
    return false
}

// ------------------------------------------------------------------------------------------------
