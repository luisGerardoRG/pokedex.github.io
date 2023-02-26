const pokemonContainer = document.querySelector('.pokemon-container');

function FetchPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => res.json())
    .then(data => CreatePokemon(data))
}

function FetchPokemons(number) {
    for (let i = 1; i <= number ; i++) {
        FetchPokemon(i);
        
    }
}
function CreatePokemon(pokemon) {
    const card = document.createElement('div');
    card.classList.add('pokemon-block')
   card.classList.add('col-sm-12')
    card.classList.add('col-lg-3')
    const spriteContainer = document.createElement('div');
    spriteContainer.classList.add('img-container');

    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.front_default;


    spriteContainer.appendChild(sprite);

    const number = document.createElement('p')
    number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;

    const name = document.createElement('a')
    name.classList.add('name');
    name.href = 'pokemon.html'

    const efecto = document.createElement('p')
    efecto.classList.add('name')
    
    
    name.textContent = pokemon.name
    card.appendChild(spriteContainer)
    card.appendChild(number)
    card.appendChild(name)
    card.appendChild(efecto)
    pokemonContainer.appendChild(card)
    pokemonContainer.classList.add('row'  )
}





FetchPokemons(900)