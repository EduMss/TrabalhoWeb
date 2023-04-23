//mudando de paginas 
//indo pra pagina inicial
function Pagina_inicial(){
    location.replace("../home/", "_self");
}
function Pagina_perfil(){
    location.replace("../perfil/", "_self");
}
//indo para pagina de cadastro
function Pagina_cadastro(){
    // location.replace("#", "_self");
    location.replace('../formulario_cadastro/','_self');
}
//indo para pagina de login 
function Pagina_login(){
    // location.replace("#", "_self");
    location.replace('../formulario_login/','_self');
}
//indo para pagina de manutenção
function Pagina_manutencao(){
    // location.replace("#", "_self");
    location.replace('../manutenção.html','_self');
}

//indo para pagina de contato
function Pagina_contato(){
    // location.replace("#", "_self");
    location.replace('../Contato/','_self');
}


//indo para pagina de contato
function logout(){
    // location.replace("#", "_self");
    location.replace('../fixados/logout.php','_self');
}