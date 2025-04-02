function jogar() {
    let venceu = false;  // Variável para controlar se o jogador venceu
    let decisao = 1;
  
    while (decisao <= 3) {
      console.log("Decisão: " + decisao);
      
      // Solicita a escolha do jogador
      let decisaoJogador = prompt("Decisão " + decisao + ", escolha o caminho (1, 2 ou 3):");
  
      // Se o jogador clicou em "Cancelar", o jogo para imediatamente
      if (decisaoJogador === null) {
        alert("Jogo cancelado!");
        return;  // Sai da função e encerra o jogo
      }
  
      // Converte a escolha para número
      decisaoJogador = parseInt(decisaoJogador);
  
      // Verifica se a escolha é válida
      if (isNaN(decisaoJogador) || decisaoJogador < 1 || decisaoJogador > 3) {
        alert("Escolha um caminho viável");
        continue;  // Volta para o começo do loop sem avançar a rodada
      }
  
      // Sorteia o vidro quebrado
      let caminhoPerigoso = Math.floor(Math.random() * 3) + 1;
  
      if (decisaoJogador == caminhoPerigoso) {
        alert("Você deu de cara com o perigo! Acabou o jogo pra você");
        return;  // Sai da função e encerra o jogo
      } else {
        alert("Passou! o perigo estava no caminho: " + caminhoPerigoso);
      }
  
      decisao++;
    }
  
    // Se o jogador completou as 3 rodadas, ele vence
    if (decisao == 4) {
      venceu = true;
      alert("Você achou a saída! Parabéns!");
    }
  }
  