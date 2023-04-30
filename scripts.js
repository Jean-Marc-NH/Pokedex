const button = document.querySelector("#enviar")
const id = document.querySelector("#id")
const contenedor = document.querySelector(".container")



button.addEventListener("click", () =>{

    contenedor.innerHTML = ""

    x = id.value.split(" ").join("-")

    fetch(`https://pokeapi.co/api/v2/pokemon/${x.toLowerCase()}/`)
        .then((promesa)=> promesa.json())
        .then((respuesta) => sacarinfo(respuesta))
})


const sacarinfo = (respuesta) =>{
    console.log(respuesta);
    let nombre = respuesta.name;
    let id = respuesta.id;
    let img = respuesta.sprites.other.dream_world.front_default;

    let altura = respuesta.height;
    let peso = respuesta.weight;

    let tipo = respuesta.types

    let stats = respuesta.stats;

    console.log(img);

    contenedor.innerHTML += `<img class="change" src=${img}></img>` 

    for(let i = 0; i <tipo.length; i++)
    contenedor.innerHTML += `<p class = "info">${tipo[i].type.name}</p>` 

    contenedor.innerHTML += `<p class = "info">ID: ${id}</p>` 
    contenedor.innerHTML += `<p class = "info">NOMBRE: ${nombre}</p>` 
    contenedor.innerHTML += `<p class = "info">PESO: ${peso}</p>` 
    contenedor.innerHTML += `<p class = "info">ALTURA: ${altura}</p>` 

    for(let i = 0; i < 6; i++)
    contenedor.innerHTML += `<p class = "info">${stats[i].stat.name.toUpperCase()}: ${stats[i].base_stat}</p>` 


}

localStorage = {
    hola: "hola"
}

