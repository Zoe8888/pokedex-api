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
      document.querySelector(
        ".pokemon-details"
      ).innerHTML = `<img src="${data.sprites.front_default} ">
        <div class="card-details">
          <div class="name">${data.name}</div> <br>
          <div class="description">
            <p class="type">Type: ${data.types[0].type.name}</p>
            <p class="height">Height: ${data.height}</p>
            <p class="weight">Weight: ${data.weight}</p>
            <p class="ability">Ability: ${data.abilities[0].ability.name}</p>
          </div>
        </div>
        `;
    });
}

let pokemonCard = {
  imgURL: "",
  imgALT: "",
  pokemonName: "",
  type: "",
};
