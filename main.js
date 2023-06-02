const pokeContainer = document.querySelector("#container")
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
}

const mainTypes = Object.keys(colors)

const fetchPokemons = async () => {
    for(let i = 1; i <= 1; i++){
        await requisicao(i)
    }
}

async function requisicao(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const responseConvertido = await response.json();
    createPokemonCard(responseConvertido)
    console.log(responseConvertido)
}

function createPokemonCard(poke) {
    const card = document.createElement("div")
    card.classList.add("pokemon")

    const name = poke.name[0].toUpperCase() + poke.name.slice(1);
    const id = poke.id.toString().padStart(3, '0');

    const pokeTypes = poke.types.map(tipo => tipo.type.name)
    const type = mainTypes.find(type => pokeTypes.indexOf(type) > -1)
    const color = colors[type]
    

    card.style.backgroundColor = color

    card.innerHTML += `
        <div class="container-imagem-pokemon">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png" alt="${poke.name}" class="imagem">
        </div>
        <div class="informacoes">
            <span class="numero">#${id}</span>
            <h3 class="name">${name}</h2>
            <small class="tipo">Type: <span>${type}</span></small>
        </div>
    `
    pokeContainer.appendChild(card)
}

fetchPokemons();