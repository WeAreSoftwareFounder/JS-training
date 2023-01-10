let  pokemoneRepositroy =  (function(){

let pokemonList = []
//retuns pokelist array
function getAll(){

  return pokemonList;

}
//pushed new pokemon to array
function add(pokemon){

  pokemonList.push(pokemon);


}
// created and implemnts buttons for onlclick function to run showDetails function
function addlistitem(pokemon){

  let pokemonList = document.querySelector('.pokemon-list');
  let listPokemon = document.createElement('li');
  let button = document.createElement('button');
  button.classList.add("button-class");
  button.innerText = pokemon.name;
  listPokemon.appendChild(button);
  pokemonList.appendChild(listPokemon);

  button.addEventListener('click', function display(){

    pokemoneRepositroy.showDetails(pokemon);
  

  })

};

function loadList(){

  return fetch('https://pokeapi.co/api/v2/pokemon/').then(function(response){
    return response.json();
  }).then(function(json){
    json.results.forEach(function(item){
    
      let pokemon = {
        name: item.name,
        showDetailsUrl: item.url,
      }

      add(pokemon);
    })
  }).catch(function(e){
    console.log(e);
  })
}

function loadDetails(pokemon){

  let url = pokemon.showDetailsUrl;
  return fetch(url).then(function(response){

    return response.json();

  }).then(function(details){

    pokemon.imageUrl = details.sprites.front_default;
    pokemon.height = details.height;
    pokemon.types = details.types;

  }).catch(function(e){

    console.log(e);

  })

}

//prints pokemonlist array to console when called
function showDetails(pokemon){

  loadDetails(pokemon).then(function(){

    console.log(pokemon)

  })

}

return {

  getAll:  getAll,
  add: add,
  addlistitem: addlistitem,
  showDetails: showDetails,
  loadList: loadList,
  loadDetails: loadDetails,
  showDetails: showDetails

};

})();

pokemoneRepositroy.loadList().then(function(){

pokemoneRepositroy.getAll().forEach(function(pokemon){

  pokemoneRepositroy.addlistitem(pokemon);

})


})