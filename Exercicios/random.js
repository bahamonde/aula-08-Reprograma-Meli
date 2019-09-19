let num = parseInt(prompt("Digite um numero de 1 a 10 que vc acha q vai ser sorteado: "))
const sorte = Math.floor(Math.random()*10+1)

if (num < sorte){
    alert(`${num} é menor que o numero sorteado. Tente novamente.`)
    let num1 = parseInt(prompt("Digite novamente um numero de 1 a 10 que vc acha q vai ser sorteado: "))
   if (num1 != sorte){
        alert("Você perdeu suas chances");
    } else{
        alert("Você acertou!!");
    }
} else if (num > sorte) {
    alert(`${num} é maior que o numero sorteado. Tente novamente.`);
    let num2 = parseInt(prompt("Digite um numero de 1 a 10 que vc acha q vai ser sorteado: "))
    if (num2 != sorte){
        alert("Você perdeu suas chances");
    }else{
        alert("Você acertou!!");}
}else{
    alert("Você acertou!!");
}




