// js/pokemon.js

function animarPokemon(element, pokemonName) {
    // Remove a animação de todas as cartas
    const cards = document.querySelectorAll('.pokemon-card');
    cards.forEach(card => card.classList.remove('animado'));

    // Adiciona animação na carta clicada
    element.classList.add('animado');

    // Exibe uma mensagem com o nome do Pokémon
    setTimeout(() => {
        alert(`AGORA É COM VOCÊ ${pokemonName}!`);
    }, 500);  // Espera a animação terminar antes de mostrar o alerta
}
