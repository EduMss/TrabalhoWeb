$(document).ready(function() {
    var lugares = [
        "Brasília",
        "São Paulo",
        "Rio de Janeiro",
        "Foz do Iguaçu",
        "Paraná",
        "Bahia",
        "Ceara",
        "Rio Grande Do Sul",
        "Goiás",
    ];

    var imagens = [
        "https://viagemeturismo.abril.com.br/wp-content/uploads/2016/10/df07-30.jpg?quality=70&strip=info&w=928&w=636",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR97BSJj_Op-qstKSH2O5IKozohDqA2pATtGzYak5cke_XJE3E9cCYmnLCTDfQQJYVeNkg&usqp=CAU",
        "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/08/rio-de-janeiro-capa2019-01.jpg",
        "https://viagemeturismo.abril.com.br/wp-content/uploads/2016/11/pr101.jpeg?quality=70&strip=info",
        "https://static.preparaenem.com/2021/06/cataratas-iguacu.jpg",
        "https://direcional.com.br/wp-content/uploads/2021/08/bahia-2.jpg",
        "https://s2.glbimg.com/HalyUKf2cYndTvvPuRHHxraAkcY=/e.glbimg.com/og/ed/f/original/2020/04/08/gettyimages-1090597146.jpg",
        "https://www.kayak.com.br/rimg/dimg/40/bc/8761dc07-city-43767-16981dd5603.jpg?width=400&height=300&xhint=3144&yhint=1983&crop=true",
        "https://viagemeturismo.abril.com.br/wp-content/uploads/2018/01/ruadepedra.jpg?quality=70&strip=info",

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
        "Ceara",
        "Rio Grande Do Sul",
        "Goiás",
    ];

    var imagens = [
        "https://viagemeturismo.abril.com.br/wp-content/uploads/2016/10/df07-30.jpg?quality=70&strip=info&w=928&w=636",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR97BSJj_Op-qstKSH2O5IKozohDqA2pATtGzYak5cke_XJE3E9cCYmnLCTDfQQJYVeNkg&usqp=CAU",
        "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/08/rio-de-janeiro-capa2019-01.jpg",
        "https://viagemeturismo.abril.com.br/wp-content/uploads/2016/11/pr101.jpeg?quality=70&strip=info",
        "https://static.preparaenem.com/2021/06/cataratas-iguacu.jpg",
        "https://direcional.com.br/wp-content/uploads/2021/08/bahia-2.jpg",
        "https://s2.glbimg.com/HalyUKf2cYndTvvPuRHHxraAkcY=/e.glbimg.com/og/ed/f/original/2020/04/08/gettyimages-1090597146.jpg",
        "https://www.kayak.com.br/rimg/dimg/40/bc/8761dc07-city-43767-16981dd5603.jpg?width=400&height=300&xhint=3144&yhint=1983&crop=true",
        "https://viagemeturismo.abril.com.br/wp-content/uploads/2018/01/ruadepedra.jpg?quality=70&strip=info",

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

function Pagina_pacotes_viagens(){
    location.replace('../pacotes_viagens/','_self');
}

//indo para pagina de reservas
function abrir_link_reservas(){
    location.replace('../PR/','_self');
}