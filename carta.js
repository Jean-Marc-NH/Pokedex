const pokemonNameElement = document.getElementById('pokemon-name');
const pokemonNameBackElement = document.getElementById('pokemon-name-back');
const pokemonImageElement = document.getElementById('pokemon-image');
const pokemonTypesElement = document.getElementById('pokemon-types');
const pokemonDetailsElement = document.getElementById('pokemon-details');
const backButton = document.querySelector('.back-button');

const ColorTipoPokemon = (type) => {
    const colors = {
      normal: "#9a9994",
      fire: "#c41c00",
      water: "#1466b0",
      grass: "#4e7c35",
      flying: "#5978d3",
      fighting: "#5c2511",
      poison: "#8f4893",
      electric: "#fabe16",
      ground: "#cfb05b",
      rock: "#9f8540",
      psychic: "#dc487c",
      ice: "#97e6ff",
      bug: "#7e8906",
      ghost: "#5e5faf",
      steel: "#93929f",
      dragon: "#7660df",
      dark: "#4b372b",
      fairy: "#f4aff8",
    };
  
    return colors[type] || "#000000";
  };


const CargarDatosPokemon = () => {
  const data = JSON.parse(localStorage.getItem('pokemonData'));

  if (data) {
    const { name, id, img, height, weight, types, stats } = data;

    pokemonNameElement.textContent = name.toUpperCase();
    pokemonNameBackElement.textContent = name.toUpperCase();
    pokemonImageElement.src = img;

    types.forEach((type) => {
        const typeElement = document.createElement('p');
        typeElement.textContent = type.type.name.toUpperCase();
        typeElement.classList.add('pokemon-type');
        typeElement.style.backgroundColor = ColorTipoPokemon(type.type.name);
        pokemonTypesElement.appendChild(typeElement);
    });

    const detailsList = [
      { label: 'ID', value: id },
      { label: 'NOMBRE', value: name },
      { label: 'PESO', value: weight },
      { label: 'ALTURA', value: height },
      ...stats.map((stat) => ({ label: stat.stat.name.toUpperCase(), value: stat.base_stat })),
    ];

    detailsList.forEach((detail) => {
      const detailElement = document.createElement('li');
      detailElement.innerHTML = `<strong>${detail.label}:</strong> ${detail.value}`;
      pokemonDetailsElement.appendChild(detailElement);
    });
  }
};

backButton.addEventListener('click', () => {
  window.location.href = 'index.html';
});

CargarDatosPokemon();