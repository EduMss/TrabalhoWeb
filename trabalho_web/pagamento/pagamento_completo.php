<?php

    include('../home/conexao.php');
    if(!isset($_SESSION)) 
    { 
        session_start(); 
    } 

    if(isset($_SESSION['email_sessao']))
    {    
        $sql = mysqli_query($mysqli, "select * from passageiro where email='".$_SESSION['email_sessao']."' limit 1") or die("Error!");
        $dados=mysqli_fetch_assoc($sql);
        $sql = mysqli_query($mysqli, "select * from pagamento where Passageiro_RG='".$dados['RG']."' limit 1") or die("Error!");
        $dados=mysqli_fetch_assoc($sql);

        echo "<script>var codigo_passagem = '" .$dados['codigo_passagem']."'; </script>";

        include('../fixados/header.php');
        include('../pagamento/compra_finalizada.html');
        

    }
    else{
        header('Location: ' . '../formulario_login/');
        }



?>