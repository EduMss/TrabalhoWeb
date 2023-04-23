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

    $in = mysqli_query($mysqli, "DELETE FROM pagamento WHERE Passageiro_RG = '".$_SESSION['RG']."'");
    $in = mysqli_query($mysqli, "DELETE FROM passageiro WHERE RG = '".$_SESSION['RG']."'");

}



if(isset($_SESSION)) 
{ 
    session_destroy();
} 

header('Location: ' . '../formulario_cadastro/');



?>
