const id = document.querySelector("#pokemon-id-name");
const button = document.getElementById('search-button');

button.addEventListener("click", (event) => {
  event.preventDefault();

  const query = id.value.split(" ").join("-");

  fetch(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}/`)
    .then((promesa) => promesa.json())
    .then((respuesta) => {
      const pokemonData = {
        name: respuesta.name,
        id: respuesta.id,
        img: respuesta.sprites.other.dream_world.front_default,
        height: respuesta.height,
        weight: respuesta.weight,
        types: respuesta.types,
        stats: respuesta.stats.slice(0, 6),
      };

      localStorage.setItem('pokemonData', JSON.stringify(pokemonData));
      window.location.href = 'carta.html';
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      alert('No se pudo encontrar el Pokémon. Por favor, intenta de nuevo.');
    });
});