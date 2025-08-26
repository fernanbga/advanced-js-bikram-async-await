//DESARROLLA AQUI TUS SOLUCIONES


//1 Declara una función **getRandomPokemon** que retorne 
// un pokemon aleatorio.
const getRandomPokemon = async () => {
    const randompok = Math.floor(Math.random() * 898) +1;
    try {
        const res = await fetch (`https://pokeapi.co/api/v2/pokemon/${randompok}`);
        const data = await res.json(); // el res de la 20
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error obteniendo pokemon random');
    }
};

//.*********************************************

//2 Declara una funcion **getImageAndName** que retorne el 
// nombre y la URL de la imagen de un pokemon => 
// (return {img, name})


async function getImageAndName (pokemon){

    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    let data = await response.json();
    let name = data.name;
    let img = data.sprites.front_default;
    return {name, img}
    
}
//.**************************************

//  3.- Declara una funcion **printImageAndName** que retorne 
// el string necesario para pintar la imagen y el nombre 
// del pokemon en el DOM de la siguiente forma:

// ```html
// <section>
//     <img src="url de imagen" alt="nombre del pokemon">
//     <h1>Nombre del pokemon</h1>
// </section>
// ``` 

function printImageAndName({ img, name }) {
  return `
<section>
    <img src="${img}" alt="${name}">
    <h1>${name}</h1>
</section>
  `.trim();
}

async function showRandomPokemon() {
  const { name, img } = await getImageAndName(Math.floor(Math.random() * 898) + 1);
  const html = printImageAndName({ img, name });
  document.getElementById('pokemon-container').innerHTML = html;
}

// Llama a la función cuando la página cargue
//window.onload = showRandomPokemon;

//..***************************************************

//4 Declara una función **getRandomDogImage** que 
// retorne la url de la imagen de un perro aleatorio

const getRandomDogImage = async () => {
    try {
        const res = await fetch(`https://dog.ceo/api/breeds/image/random`);
    const data = await res.json();
    console.log(data);
    return data.message;
    } catch (error) {
        console.error('Error obteniendo perrito');
    }
    
};
// getRandomDogImage()
//   .then((data) => console.log(data))
//   .catch((error) => console.log("hubo un error" + error));

//-*******************************************

//5 5.- Declara una función **getRandomPokemonImage** 
// que retorne la url de la imagen de un pokemon aleatorio.

// sprites: {
//     back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/363.png',
//     back_female: null,
//     back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/363.png',
//     back_shiny_female: null,
//     front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/363.png',


const getRandomPokemonImage = async () => {
  const randomId = Math.floor(Math.random() * 898) + 1;
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    const data = await res.json();
    return data.sprites.front_default; // Retorna la URL de la imagen
  } catch (error) {
    console.error('Error obteniendo imagen del Pokémon:', error);
  }
};

const showRandomPokemonImage = async () => {
  const imageUrl = await getRandomPokemonImage();
  console.log("URL de la imagen del Pokemon aleatorio:", imageUrl);
};

// showRandomPokemonImage()

// 7.- 7.- Declara una función **getRandomCharacter** 
// que retorne un personaje aleatorio.

const getRandomCharacter = async () => {
    const randomRick = Math.floor(Math.random() * 826) +1;
    try {
        const res = await fetch (`https://rickandmortyapi.com/api/character/${randomRick}`);
        const data = await res.json(); // el res de la 20
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error obteniendo Rick aleatorio');
    }
}
// getRandomCharacter()
//   .then((data) => console.log(data))
//   .catch((error) => console.log("hubo un error" + error));

//-*************************************************

// Ejercicio 8.- Declara una función **getRandomCharacterInfo** 
// que retorne de un personaje su imagen, nombre, episodios 
// en los que aparece y el nombre del primer episodio en el 
// que aparece + fecha de estreno, tendrás que hacer otro fetch 
// para llegar a los ultimos datos. 
// Formato de retorno => 
// (return {img, name, episodes, firstEpisode, dateEpisode})

const getRandomCharacterInfo = async () => {
  try {
    //obtener personaje aleatorio rehusado de arriba
    const randomId = Math.floor(Math.random() * 826) + 1;
    const res = await fetch(`https://rickandmortyapi.com/api/character/${randomId}`);
    const data = await res.json();

    const img = data.image;
    const name = data.name;
    const episodes = data.episode.length;
    const firstEpisodeUrl = data.episode[0];

    //obtener info del primer capitulo
    const epRes = await fetch(firstEpisodeUrl);
    const epData = await epRes.json();
    const firstEpisode = epData.name;
    const dateEpisode = epData.air_date;

    return { img, name, episodes, firstEpisode, dateEpisode };
  } catch (error) {
    console.error('Error obteniendo Rick:', error);
  }
};

getRandomCharacterInfo()
    .then(info => console.log(info));