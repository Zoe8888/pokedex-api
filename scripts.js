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
      ).innerHTML = `<img src="${data.sprites.front_default} ">`;
    });
}

// const header = document.getElementById("header");
// const listContainer = document.getElementById("pokemon-list");
// const url = "https://pokeapi.co/api/v2/pokemon/ditto"

// function createCard(pokemon, index) {
//   let card = document.createElement("div");
//   card.classList.add("card");
//   let content = `
//   `
// }
