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
      <button onclick="getPokemonList('${data.previous}')">Previous</button>`;
      container.innerHTML += `
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
        <div class="sprite">
          <img src="${data.sprites.other.dream_world.front_default} ">
        </div>
        <div class="card-details">
          <div class="name">${data.name}</div> <br>
          <div class="description">
            <p class="species"></p>
            <p class="type">Type: ${data.types[0].type.name}</p>
            <p class="height">Height: ${data.height}</p>
            <p class="weight">Weight: ${data.weight}</p>
            <p class="ability">Ability: </p>
          </div>
        </div>
        `;
      let abilities = document.querySelector(".ability");
      for (let i = 0; i < data.abilities.length; i++) {
        if (i < data.abilities.length - 1) {
          abilities.innerHTML += `${data.abilities[i].ability.name},`;
        } else {
          abilities.innerHTML += `${data.abilities[i].ability.name}`;
        }
      }
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

let searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", function () {
  let search = document.querySelector(".search").value;
  search = search.toLowerCase();
  getPokemonInfo(`https://pokeapi.co/api/v2/pokemon/${search}`);
  fetch(`https://pokeapi.co/api/v2/pokemon/${search}`).then((res) => {
    if (res.ok) {
      if (response.url == `https://pokeapi.co/api/v2/pokemon/`) {
        document.querySelector(".invalid").classList.add("active");
      } else {
        getPokemonInfo(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
      }
    } else {
      document.querySelector(".invalid").classList.add("active");
    }
  });
});
