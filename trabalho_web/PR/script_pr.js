function desabilitar(valor){

    // valor == true e referente ao valor que e passado em this.checked no checkbox, então ele vai retornar em true ou falso.
    if(valor == true){

    // aqui ele ta adicionando o disabled = true nas tags que tem esses ids q estão entre ().
     document.getElementById('data_ida').disabled = true;
     document.getElementById('data_volta').disabled = true;
     document.getElementById('adultos').disabled = true;
     document.getElementById('menores').disabled = true;
     document.getElementById('classe').disabled = true;
   }else{
      document.getElementById('data_ida').disabled = false;
      document.getElementById('data_volta').disabled = false;
      document.getElementById('adultos').disabled = false;
      document.getElementById('menores').disabled = false;
      document.getElementById('classe').disabled = false;
   }
  }


// ------------------------------------------------------------------------------------------------

//indo para compra
function Pagina_compra(){
  // location.replace("#", "_self");
  location.replace('../pagamento/','_self');
}