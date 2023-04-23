<?php
$timezone = new DateTimeZone('Etc/GMT+3');
$agora = new DateTime('now', $timezone);
//echo $agora->format('dmYHis'); // Exibe no formato desejado
//echo $agora->format('d/m/Y H:i:s'); // Exibe no formato desejado


include("../home/conexao.php");

if(!isset($_SESSION)) 
{ 
    session_start(); 
} 

$sql = mysqli_query($mysqli, "select * from passageiro where email='".$_SESSION['email_sessao']."' limit 1") or die("Error!");
$dados=mysqli_fetch_assoc($sql);



$nome_cartao = $_POST['nome_cartao'];
// $rg = $_POST['Passageiro_RG'];
$rg = $dados['RG'];
$numero_cartao = $_POST['numero_cartao'];
$codigo = $_POST['codigo'];
$mes = $_POST['mes'];
$Anos = $_POST['Anos'];

$validade = $mes."/".$Anos;

$codigo_passagem = $rg."-".$agora->format('dmYHis');

if(
    $nome_cartao == "" ||
    $rg == "" ||
    $numero_cartao == "" ||
    $codigo == "" ||
    $mes == "" ||
    $Anos == "" 
){
    echo 'Error ao processar o pagamento!';
}
else{
    $in = mysqli_query($mysqli, "insert into pagamento (nome_cartao, numero_cartao, validade, Codigo, codigo_passagem, Passageiro_RG) values ('$nome_cartao','$numero_cartao','$validade','$codigo','$codigo_passagem','$rg')");


    include('../pagamento/pagamento_completo.php');

}    
?>