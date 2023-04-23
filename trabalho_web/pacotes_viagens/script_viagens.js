$(document).ready(function() {
    var lugares = [
        "Brasília",
        "São Paulo",
        "Rio de Janeiro",
        "Foz do Iguaçu",
        "Paraná",
        "Bahia",
        "Ceará",
        "Rio Grande Do Sul",
        "Goiás",
        "Alagoas",
        "Espírito Santo",       
        "Maranhão",
        "Pará",
        "Roraima",
        "Sergipe",
        "Tocantins",
        "Santa Catarina",


    ];

    var imagens = [
        "../Imagens/locais/Alagoas.jpg",
        "../Imagens/locais/Bahia.jpg",
        "../Imagens/locais/Brasília.webp",
        "../Imagens/locais/Ceara.webp",
        "../Imagens/locais/EspiritoSanto.jpeg",
        "../Imagens/locais/FozdoIguaçu.webp",
        "../Imagens/locais/Goias.webp",
        "../Imagens/locais/Maranhão.jpg",
        "../Imagens/locais/Paraná.webp",
        "../Imagens/locais/Pará.jpg",
        "../Imagens/locais/RiodeJaneiro.jpg",
        "../Imagens/locais/RioGrandeDoSul.jpg",
        "../Imagens/locais/Roraima.jpg",
        "../Imagens/locais/SantaCatarina.jpg",
        "../Imagens/locais/Sergipe.webp",
        "../Imagens/locais/SãoPaulo.jpeg",
        "../Imagens/locais/Tocantins.jpg",

    ];

    var preços = [
        "600,00",
        "350,00",
        "400,00",
        "650,00",
        "600,00",
        "570,00",
        "550,00",
        "600,00",
        "550,00",
        "450,00",
        "510,00",
        "650,00",
        "700,00",
        "550,00",
        "350,00",
        "450,00",
        "500,00",
    ];

    var q = 0
    var qt = 0

    document.getElementById("output_resultados").innerHTML = "resultados: "+lugares.length;
    $("#box").empty();
    

    for (let i = 1; i <= lugares.length; i++){
        i2 = i-1

        if (q<1 || q>2){
            qt = qt + 1
            var tempq = '<div class="inicio" id="inicio'+ qt +'"></div>';
            $("#box").append(tempq);

            q = 0

        }
        q = q + 1

        var parcela = parseFloat(preços[i2])/12.00
        parcela = parcela.toFixed(2)

        //var temp= '<a onclick="abrir_link_reservas('+"'"+lugares[i2]+"'"+')" target="_blank" class="links" id="link_'+qt+'"><div class="item-cada-lugar"><div class="imagem-viagem" style="background-image: url('+ imagens[i2] +');"></div><h3 class="h3_info">'+lugares[i2]+'</h3><div class="precos"><h5 class="h5_info">Por: '+ preços[i2] +'</h5><h4 class="h4_info">12x de R$' + parcela + '</h4></div></div></a>'
        var temp= '<a onclick="abrir_link_reservas()" target="_blank" class="links" id="link_'+qt+'"><div class="item-cada-lugar"><div class="imagem-viagem" style="background-image: url('+ imagens[i2] +');"></div><h3 class="h3_info">'+lugares[i2]+'</h3><div class="precos"><h5 class="h5_info">Por: '+ preços[i2] +'</h5><h4 class="h4_info">12x de R$' + parcela + '</h4></div></div></a>'

       $("#inicio"+qt).append(temp);
    }
  });

//usar o enter na barra de pesquisa
$(window).keydown(function(event){
    if(event.keyCode == 13) {
        event.preventDefault();
        Enviar();
        return false;
    }
});

// função para fazer a pesquisa e aparecer quais locais vc esta procurando
function Enviar() {

    var lugares = [
        "Brasília",
        "São Paulo",
        "Rio de Janeiro",
        "Foz do Iguaçu",
        "Paraná",
        "Bahia",
        "Ceará",
        "Rio Grande Do Sul",
        "Goiás",
        "Alagoas",
        "Espírito Santo",       
        "Maranhão",
        "Pará",
        "Roraima",
        "Sergipe",
        "Tocantins",
        "Santa Catarina",


    ];

    var imagens = [
        "../Imagens/locais/Alagoas.jpg",
        "../Imagens/locais/Bahia.jpg",
        "../Imagens/locais/Brasília.webp",
        "../Imagens/locais/Ceara.webp",
        "../Imagens/locais/EspiritoSanto.jpeg",
        "../Imagens/locais/FozdoIguaçu.webp",
        "../Imagens/locais/Goias.webp",
        "../Imagens/locais/Maranhão.jpg",
        "../Imagens/locais/Paraná.webp",
        "../Imagens/locais/Pará.jpg",
        "../Imagens/locais/RiodeJaneiro.jpg",
        "../Imagens/locais/RioGrandeDoSul.jpg",
        "../Imagens/locais/Roraima.jpg",
        "../Imagens/locais/SantaCatarina.jpg",
        "../Imagens/locais/Sergipe.webp",
        "../Imagens/locais/SãoPaulo.jpeg",
        "../Imagens/locais/Tocantins.jpg",

    ];

    var preços = [
        "600,00",
        "350,00",
        "400,00",
        "650,00",
        "600,00",
        "570,00",
        "550,00",
        "600,00",
        "550,00",
        "450,00",
        "510,00",
        "650,00",
        "700,00",
        "550,00",
        "350,00",
        "450,00",
        "500,00",
    ];

    var lugares_busca = []
    var imagens_busca = []
    var preços_busca = []
    var index_list = []

    let inputed = document.querySelector("#texto_busca").value

    
    $("#box").empty();

    inputed = inputed.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    lugares.forEach(lugar => {
      let text = lugar.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
      if(text.includes(inputed)){
        var index = lugares.findIndex(item => item == lugar)
        lugares_busca.push(lugar)
        imagens_busca.push(imagens[index])
        preços_busca.push(preços[index])
        index_list.push(index)
      }
    })

    var q = 0
    var qt = 0

    for (let i = 1; i <= lugares_busca.length; i++){
        i2 = i-1

        if (q<1 || q>2){
            qt = qt + 1
            var tempq = '<div class="inicio" id="inicio'+ qt +'"></div>';
            $("#box").append(tempq);

            q = 0

        }
        q = q + 1

        var parcela = parseFloat(preços_busca[i2])/12.00
        parcela = parcela.toFixed(2)
                
        var temp= '<a onclick="abrir_link_reservas()" target="_blank" class="links" id="link_'+qt+'"><div class="item-cada-lugar"><div class="imagem-viagem" style="background-image: url('+ imagens_busca[i2] +');"></div><h3 class="h3_info">'+lugares_busca[i2]+'</h3><div class="precos"><h5 class="h5_info">Por: '+ preços_busca[i2] +'</h5><h4 class="h4_info">12x de R$' + parcela + '</h4></div></div></a>'

        document.getElementById("output_resultados").innerHTML = "resultados: "+lugares_busca.length;
        $("#inicio"+qt).append(temp);

    }
}

//mudando de paginas 

//indo para pagina de manutenção
function Pagina_manutencao(){
    // location.replace("#", "_self");
    location.replace('../manutenção.html','_self');
}


//indo para pagina de reservas
function abrir_link_reservas(){
    location.replace('../PR/','_self');
}