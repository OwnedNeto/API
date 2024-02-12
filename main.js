const pokemones = document.querySelector(".pokemon-container");

function pok(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then((res) => res.json())
        .then((data) =>{
            crear(data);
            console.log(data)
        });

}

function poke(number){
    for(let i = 1; i <= number; i++){
        pok(i); 
    }
}

function crear(pokemon){
    const card = document.createElement('div');
    card.classList.add('pokemon-block');

    const spriteContainer = document.createElement('div');
    spriteContainer.classList.add('img-container');


    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.front_default;

    spriteContainer.appendChild(sprite);

    const name = document.createElement('p');
    name.classList.add('name');
    name.textContent = `Nombre = ${pokemon.name}`

    const base = document.createElement('p');
    base.classList.add('base_experience');
    base.textContent = `Experiencia base = ${pokemon.base_experience}`;

    const abi = document.createElement('p');
    base.classList.add('abilities');
    base.textContent = `Habilidades = ${pokemon.abilities[0].ability.name},${pokemon.abilities[1].ability.name}`;

 

    const altura = document.createElement('p');
    altura.classList.add('height');
    altura.textContent = `Altura = ${pokemon.height}`;
    const peso = document.createElement('p');
    peso.classList.add('weight');
    peso.textContent = `Peso = ${pokemon.weight}`;

    const inicioid = document.createElement('p');
    inicioid.classList.add('id');
    inicioid.textContent = `Numero = ${pokemon.id}`;

    card.appendChild(spriteContainer);
    card.appendChild(inicioid);
    card.appendChild(name);
    card.appendChild(base);
    
    card.appendChild(altura);
    card.appendChild(peso);

    pokemones.appendChild(card);
}

poke(10);

