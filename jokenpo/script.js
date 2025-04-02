
function jogar()
{
    
    escolhaJogador = prompt("Digite 1-Pedra, 2-Papel ou 3-Tesoura?")
    escolhaComputador = Math.floor(Math.random() * 3) + 1;

    if (escolhaJogador == escolhaComputador) 
    {
        alert("Empate!")
        alert("A escolha do computador foi: " + escolhaComputador)
    }


if(escolhaJogador == 1)
{
    if (escolhaComputador == 2)
    {
        alert("Computador venceu, escolheu papel")           
    }

    if (escolhaComputador == 3) 
    {
        alert("Jogador vence, computador escolheu tesoura")
    }
}

if(escolhaJogador == 2)
    {
        if (escolhaComputador == 1)
        {
            alert("Jogador vence, computador escolheu pedra")           
        }
    
        if (escolhaComputador == 3) 
        {
            alert("Computador venceu, escolheu tesoura")
        }
    }

if(escolhaJogador == 3)
    {
        if (escolhaComputador == 1)
         {
            alert("Computador venceu, escolheu pedra")           
         }
        
        if (escolhaComputador == 2) 
        {
            alert("Jogador vence, computador escolheu papel")
         }
    }

}