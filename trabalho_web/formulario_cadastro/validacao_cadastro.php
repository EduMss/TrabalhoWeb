<?php

include("../home/conexao.php");

$nome = $_POST['nome_cliente'];
$rg = $_POST['rg'];
$cpf = $_POST['cpf_cliente'];
$data_nascimento = $_POST['nascimento'];
$genero = $_POST['genero'];
$passaporte = $_POST['passaporte'];
$telefone = $_POST['tel_cliente'];
$telefone_cel = $_POST['tel_cel_cliente'];
$email = $_POST['email_cliente'];
$senha = $_POST['senha'];

if(
    $nome == "" ||
    $rg == "" ||
    $cpf == "" ||
    $data_nascimento == "" ||
    $genero == "" ||
    $passaporte == "" ||
    $telefone == "" ||
    $email == "" ||
    $senha == ""
){
    echo 'Error ao se cadastrar!';
}
else{
    $in = mysqli_query($mysqli, "insert into passageiro (nome,CPF,RG,data_nascimento,telefone,telefone_cel,genero,email,passaporte,senha) values ('$nome','$cpf','$rg','$data_nascimento','$telefone','$telefone_cel','$genero','$email','$passaporte','$senha')");

    include('../formulario_login/validacao_login.php');

}    


?>
