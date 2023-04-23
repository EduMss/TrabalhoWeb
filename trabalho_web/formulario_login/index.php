<?php


include('../home/conexao.php');
if(!isset($_SESSION)) 
{ 
    session_start(); 
} 

if(isset($_SESSION['email_sessao']))//logado
{
    // include('../home/');
    header('Location: ' . '../home/');

}
else{//não logado

    include('../fixados/header.php');

    include('./index.html');

}


?>