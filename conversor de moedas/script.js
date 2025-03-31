

function conversor() {
    // 1. Pede o valor em DÓLARES (USD)
    const valorDolar = parseFloat(prompt("Digite um valor em DÓLARES (USD) para converter em EUROS (EUR):"));
    
    // 2. Taxa de conversão (1 USD = 0.92 EUR)
    const umDolarEmEuro = 0.92;
    const valorEuro = valorDolar * umDolarEmEuro;
    
    // 3. Formata o resultado como "1.000.000,00"
    const valorFormatado = valorEuro.toLocaleString('pt-BR', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    
    // 4. Mostra o resultado no alerta
    alert(`€ ${valorFormatado}`);
  }