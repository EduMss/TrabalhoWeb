<?php

//  $dados['nome'];
//  $dados['CPF'];
//  $dados['RG'];
//  $dados['data_nascimento'];
//  $dados['telefone'];
//  $dados['telefone_cel'];
//  $dados['genero'];
//  $dados['email'];
//  $dados['passaporte'];
//  $dados['senha'];

//nome,CPF,RG,data_nascimento,telefone,telefone_cel,genero,email,passaporte,senha

    include('../home/conexao.php');
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

        echo "<script>var nome = '".$dados['nome']."'</script>";
        echo "<script>var rg_input = '".$dados['RG']."'</script>";
        echo "<script>var cpf_input = '".$dados['CPF']."'</script>";
        echo "<script>var data_nascimeto_input = '".$dados['data_nascimento']."'</script>";
        echo "<script>var sexo_input = '".$dados['genero']."'</script>";
        echo "<script>var passaporte_input = '".$dados['passaporte']."'</script>";
        echo "<script>var telefone_input = '".$dados['telefone']."'</script>";
        echo "<script>var telefone_cel_input = '".$dados['telefone_cel']."'</script>";
        echo "<script>var email_input = '".$dados['email']."'</script>";
        echo "<script>var senha_input = '".$dados['senha']."'</script>";

        // include('../home/');
        include('../fixados/header.php');

        include('./index.html');
        

    }
    else{//não logado

        header('Location: ' . '../home/');

    }




?>
