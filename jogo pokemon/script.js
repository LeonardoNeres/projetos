function jogar(escolhaJogador) {
    const tipos = ['fogo', 'agua', 'planta', 'eletrico', 'terra', 'aco', 'dragao', 'fada', 'fantasma', 'gelo', 'inseto', 'lutador', 'normal', 'psiquico', 'sombrio', 'venenoso', 'voador'];

    // Mapeamento das relações de vitória/derrota entre os tipos
    const vitoria = {
        fogo: ['planta', 'gelo', 'inseto', 'lutador'],
        agua: ['fogo', 'terra', 'gelo'],
        planta: ['agua', 'terra'],
        eletrico: ['agua', 'terra'],
        terra: ['fogo', 'eletrico', 'planta'],
        aco: ['dragao', 'fada', 'gelo'],
        dragao: ['planta', 'fogo', 'gelo'],
        fada: ['dragao', 'lutador', 'fantasma'],
        fantasma: ['fantasma', 'psiquico'],
        gelo: ['planta', 'voador', 'dragao'],
        inseto: ['planta', 'psiquico', 'sombrio'],
        lutador: ['gelo', 'rocha', 'sombrio'],
        normal: ['psiquico', 'sombrio'],
        psiquico: ['lutador', 'venenoso', 'fantasma'],
        sombrio: ['fantasma', 'psiquico'],
        venenoso: ['planta', 'fada', 'psiquico'],
        voador: ['planta', 'lutador', 'inseto', 'gelo'],
    };

    // O computador escolhe um tipo aleatório
    const escolhaComputador = tipos[Math.floor(Math.random() * tipos.length)];

    // Exibir a escolha do computador
    let resultado = `O computador escolheu ${capitalize(escolhaComputador)}.<br>`;

    // Verificar as condições do jogo
    if (escolhaJogador === escolhaComputador) {
        resultado += "Empate! Ambos escolheram o mesmo tipo.";
    } else if (vitoria[escolhaJogador].includes(escolhaComputador)) {
        resultado += `Você venceu! ${capitalize(escolhaJogador)} vence ${escolhaComputador}.`;
    } else {
        resultado += `Você perdeu! ${capitalize(escolhaComputador)} vence ${escolhaJogador}.`;
    }

    // Exibir o resultado na tela
    document.getElementById("resultado").innerHTML = resultado;
}

// Função para capitalizar a primeira letra (ex: "fogo" -> "Fogo")
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
