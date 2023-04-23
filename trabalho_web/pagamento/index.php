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
    
        echo "<script>var rg_dados = '" .$dados['RG']."'; </script>";

        include('../fixados/header.php');
        include('PAGAMENTO.html');

    }
    else{
        header('Location: ' . '../formulario_login/');

        }


    

?>