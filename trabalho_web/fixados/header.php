<?php

    include('../home/conexao.php');

    if(!isset($_SESSION)) 
    { 
        session_start(); 
    } 
    


    
    if(isset($_SESSION['email_sessao']))
    {

        include('header_logado.html');

    }
    else{

        include('header.html');

        }


    


?>