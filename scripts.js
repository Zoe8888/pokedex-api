let base_URL = "https://pokeapi.co/api/v2/pokemon/";

function getPokemonList(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let pokemon = data.results;
      let container = document.querySelector(".pokemon-list");
      container.innerHTML = "";

      pokemon.forEach((button) => {
        container.innerHTML += `<button onclick="getPokemonInfo('${button.url}')">${button.name}</button>`;
      });
      container.innerHTML += `<br><br>
      <button onclick="getPokemonList('${data.next}')">Next</button>`;
    });
}

getPokemonList(base_URL);

function getPokemonInfo(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let desc = "";

      document.querySelector(".pokemon-details").innerHTML = `
        <button class="close" title="close">X</button>
        <img class="sprite" src="${data.sprites.other.dream_world.front_default} ">
        <div class="card-details">
          <div class="name">${data.name}</div> <br>
          <div class="description">
            <p class="species"></p>
            <p class="type">Type: ${data.types[0].type.name}</p>
            <p class="height">Height: ${data.height}</p>
            <p class="weight">Weight: ${data.weight}</p>
            <p class="ability">Ability: ${data.abilities[0].ability.name} </p>
          </div>
        </div>
        `;
      fetch(data.species.url)
        .then((res) => res.json())
        .then((data) => {
          document.querySelector(".species").innerHTML =
            data.flavor_text_entries[0].flavor_text;
        });
      document.querySelector(".close").addEventListener("click", function () {
        document.querySelector(".pokemon-details").classList.remove("active");
      });
      document.querySelector(".pokemon-details").classList.add("active");
    });
}

let abilities = "";
for (let i = 0; i < data.abilities.length; i++) {
  if (i < data.abilities.length - 1) {
    abilities += `${data.abilities[i].ability.name},`;
  } else {
    abilities += `${data.abilities[i].ability.name}`;
  }
}

emptySearch = () => {
  const search = document.getElementsByClassName("search-bar").value;
  const empty = `<div class="card")"> 
      <div class="card_name">
        The Pokemon: ${search} does not exist in our database.
        Feel free to search for another one.
      </div>
    </div>`;
  renderEmpty("pokemons", empty);
};

findPokemon = (pokemon) => {
  return `<img src="${data.sprites.front_default} ">
  <div class="card-details">
    <div class="name">${data.name}</div> <br>
    <div class="description">
      <p class="type">Type: ${data.types[0].type.name}</p>
      <p class="height">Height: ${data.height}</p>
      <p class="weight">Weight: ${data.weight}</p>
      <p class="ability">Ability: ${data.abilities[0].ability.name}</p>
    </div>
  </div>`;
};

let pokemonCard = {
  imgURL: "",
  imgALT: "",
  pokemonName: "",
  type: "",
};
