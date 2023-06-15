const pokemonTable = document.querySelector(`#poke-table`)
const tableBody = document.querySelector(`#table-body`)
const tableRow = document.querySelector(`#poke-table-row`)

fetch('https://pokeapi.co/api/v2/pokemon')
.then((response) => response.json())
.then(data => {

    data.results.forEach(pokemon => {
        fetch(pokemon.url)
        .then((response) => response.json())
        .then((pokemonData) => {
            displayPokemons(pokemonData)
        })
    })
})

function displayPokemons(pokemonData) {
    // Creating a row
    const tableRow = document.createElement('tr')

    const pokemonImg = pokemonData.sprites.front_default
    const pokemonName = pokemonData.name
    const pokemonHeight = pokemonData.height
    const pokemonWeight = pokemonData.weight

    tableRow.innerHTML += `
    <td class="align-center px-4 py-2 w-1/4 "><img src="${pokemonImg}" alt="${pokemonName}"</td>
    <td class="text-center px-4 py-2 w-1/4 ">${pokemonName}</td>
    <td class="text-center px-4 py-2 w-1/4 ">${pokemonHeight}</td>
    <td class="text-center px-4 py-2 w-1/4 ">${pokemonWeight}</td>
    `

   // Adding row to table body 
   tableBody.appendChild(tableRow)
}
