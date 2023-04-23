<?php

include("../home/conexao.php");
if(!isset($_SESSION)) 
    { 
        session_start(); 
    } 

    if(isset($_SESSION['email_sessao']))//logado
    {
        $sql = mysqli_query($mysqli, "select * from passageiro where email='".$_SESSION['email_sessao']."' limit 1") or die("Error!");
        $linhas = mysqli_num_rows($sql);
        if($linhas == '' || $linhas == NULL){
            echo 'usuário não enconstrado ou usuário e senha inválidos';
        }

        $dados=mysqli_fetch_assoc($sql);
        $rg_SESSION = $dados['RG'];
    }

$nome = $_POST['nome_cliente'];
//$rg = $_POST['rg'];
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
    //$rg == "" ||
    $cpf == "" ||
    $data_nascimento == "" ||
    $genero == "" ||
    $passaporte == "" ||
    $telefone == "" ||
    $email == "" ||
    $senha == ""
){
    echo 'Error ao atualizar o perfil!';
}
else{
    $in = mysqli_query($mysqli, "UPDATE passageiro SET nome = '$nome', CPF = '$cpf', data_nascimento = '$data_nascimento', genero = '$genero', passaporte = '$passaporte', telefone = '$telefone', email = '$email', senha = '$senha', telefone_cel = '$telefone_cel' WHERE rg = '$rg_SESSION'");

    header('Location: ' . '../home/');

}    


?>
