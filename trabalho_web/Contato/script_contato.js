//função de enviar comentarios 
function enviarcomentario(){
    var comentario = document.getElementById('text_area').value;
    alert("seu comentario foi enviado com sucesso!\ncometario:\n\n"+comentario);
    $("#text_area").val('');
}
