 <?php

include("../home/conexao.php");

$sql = mysqli_query($mysqli, "select * from passageiro where email='".$_POST['email_cliente']."' and senha='".$_POST['senha']."' limit 1") or die("Error!");
$linhas = mysqli_num_rows($sql);
if($linhas == '' || $linhas == NULL){
    echo 'usuário não enconstrado ou usuário e senha inválidos';
}

else{
    while($dados=mysqli_fetch_assoc($sql)){
        session_start();
        $_SESSION['email_sessao'] = $dados['email'];
        $_SESSION['RG'] = $dados['RG'];
        header("location: ../home/");
    }
}


 ?>


