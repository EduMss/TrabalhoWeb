$(document).ready(function() {
    rg_ = document.querySelector(".Passageiro_RG");
    rg_.value = rg_dados;
    rg_.$_POST = rg_dados;

});


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

function validacao_nome(classe){
    var a = document.querySelector(classe).value

    if( a == null || a == "" || a == " "){
        return false

    }else{
        
        if( isDigit(a) == true){
            return false
            
        }else{
            return true
        }
    }
}


function validacao_validade(classe_mes,classe_ano){
    var mes = document.querySelector(classe_mes).value
    var ano = document.querySelector(classe_ano).value

    var validade = mes + '/' + ano



    if( mes == null || mes == "" || mes == " " || ano == null || ano == "" || ano == " "){
        return false

    }else{
        console.log(validade)
        return true
    }
}

function processar_pagamento(){

    validacao_numero_cartao = validacao(".numero_cartao",16)
    validacao_rg = validacao(".Passageiro_RG",9)
    validacao_codigo = validacao(".codigo",3)
    validacao_nome_cartao = validacao_nome(".nome_cartao")
    validacao_validade_cartao = validacao_validade(".mes",".Anos")

    // validacao_numero_cartao == true && validacao_rg == true && validacao_codigo == true && validacao_nome_cartao == true && validacao_validade_cartao == true

    if(validacao_numero_cartao == true && validacao_rg == true && validacao_codigo == true && validacao_nome_cartao == true && validacao_validade_cartao == true){
        // console.log('true');
        // console.log( document.querySelector(".Passageiro_RG").value)
        // return false

        return true
    }else{
        // console.log('false');
        return false
    }

}