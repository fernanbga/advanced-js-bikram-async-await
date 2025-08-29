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

async function printImageAndName () {
   try{
    let data = await getRandomPokemon();
    let section =`<section>
                <img src="${data.sprites.front_default}" alt="${data.name}">
                <h1>${data.name}</h1>
                </section>`
     document.body.innerHTML += section
    return section;
 } catch (error) {
    console.log(`ERROR: ${error.stack}`);
  }
}
printImageAndName().then(data => console.log(data));


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

// Ejercicio 6.- Declara una función printPugVsPikachu que pinte la batalla entre "Pug" y "Pikachu" (no se testea)

function printPugVsPikachu(pugImg, pikachuImg) {
  return `
<section style="display: flex; align-items: center; justify-content: center; gap: 2rem;">
  <div style="text-align: center;">
    <img src="${pugImg}" alt="Pug" style="width:150px;">
    <h2>Pug</h2>
  </div>
  <h1>VS</h1>
  <div style="text-align: center;">
    <img src="${pikachuImg}" alt="Pikachu" style="width:150px;">
    <h2>Pikachu</h2>
  </div>
</section>
  `.trim();
}


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

async function getRandomCharacterInfo () {
  try{
    let data = await getRandomCharacter();
    let res = await fetch(data.episode[0]);
    let episodeData = await res.json();
    let characterInfo = {
      img: data.image,
      name: data.name,
      episodes: data.episode,
      firstEpisode: episodeData.name,
      dateEpisode: episodeData.air_date
    }
    
    let section = `<section>
                <img src="${characterInfo.img}" alt="${characterInfo.name}">
                <h2>${characterInfo.name}</h2>
                <h4>First Episode: ${characterInfo.firstEpisode}</h4>
                <h4>Air Date: ${characterInfo.dateEpisode}</h4> 
                <p>${characterInfo.episodes}</p>
                </section>`

    document.body.innerHTML += section
    return characterInfo;
  }catch (error) {
    console.log(`ERROR: ${error.stack}`);
  }
}
getRandomCharacterInfo().then(data=> console.log(data));