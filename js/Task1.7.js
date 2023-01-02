  // Creates pokemoneRepositry IFFE
  let  pokemonRepository= (function(){

    let pokemonList =  [];
    let apiUrl = "https://pokeapi.co/api/v2/pokemon/";

  // add pokemon to pokemoneRepositroy IIFE
  function add(pokemon){

    pokemonList.push(pokemon);

  }
    //return all values of pokemonRepositry IIFE
    function getAll(){

      return pokemonList;

    }

    function addlistitem(pokemon){

      let pokemonList = document.querySelector('pokemon-list');
      let listPokemon = document.createElement('li');
      let button = document.createElement('button');
      button.innertext = pokemon.name;
      button.classList.add("button-class");
      listPokemon.appendChild(button);
      pokemonList.appendChild(listPokemon);

    }
    

    function loadList() {
      return fetch(apiUrl).then(function (response) {
        return response.json();
      }).then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
        });
      }).catch(function (e) {
        console.error(e);
      })
    }

    function loadDetails(item) {
      let url = item.detailsUrl;
      return fetch(url).then(function (response) {
        return response.json();
      }).then(function (details) {
        // Now we add the details to the item
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      }).catch(function (e) {
        console.error(e);
      });
    }
  
    return {
      add: add,
      getAll: getAll,
      addlistitem: addlistitem,
      loadList: loadList,
      loadDetails: loadDetails,
    };
})();

  // Searches array for objects and creates list to documment
  pokemonRepository.loadList().then(function() {
    // Now the data is loaded!
    pokemonRepository.getAll().forEach(function(pokemon) {

      let pokemon_list = document.querySelector('.pokemon-list');
      let listitem = document.createElement('li');
      let button = document.createElement('button');
      button.innerText = pokemon.name;
      button.classList.add('button-class');
      listitem.appendChild(button);
      pokemon_list.appendChild(listitem);
  
  
    });
  });