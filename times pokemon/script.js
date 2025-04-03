let pokemons = ["", "", "", "", "", ""];
let equipeRocket = ["", "", "", "", "", ""];
let forcaPokemons = 0;
let forcaRocket = 0;

function batalhar() {
  for (let i = 0; i < 6; i++) {
    let escolhaPokemons = prompt("Digite o nome do seu Pokémon " + (i + 1));
    pokemons[i] = escolhaPokemons;
    forcaPokemons += Math.floor(Math.random() * 10) + 1;
  }


  let rocketPossiveis = [" charizard", " gengar", " arcanine", " bulbsaur", " blaziken", " umbreon", " lucario", " gardevoir", " eevee", " dragonite", " silcoon", " gothita", " eelektrik", " yungoos", " mimikyu"];
  for (let i = 0; i < 6; i++) {
    let indiceAleatorio = Math.floor(Math.random() * 15);
    equipeRocket[i] = rocketPossiveis[indiceAleatorio];
    forcaRocket += Math.floor(Math.random() * 10) + 1;
  }


  if (forcaPokemons > forcaRocket) {
    alert("Seu time é muito forte! Você ganhou a batalha, sua força é de: " + forcaPokemons);
  } else if (forcaPokemons < forcaRocket) {
    alert("A equipe rocket ganhou a batalha, a força deles é de: " + forcaRocket);
  } else {
    alert("A batalha empatou!");
  }
  
  alert("seu time era: \n" + pokemons)
  alert("O time da equipe rocket era: \n" + equipeRocket)

}

document.getElementById("botaoBatalha").addEventListener("click", batalhar);
