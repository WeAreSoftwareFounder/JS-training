let  pokemoneRepositroy =  (function(){

  let pokemonList = [

    {name: "Bulbasor", height: 0.7, types: "grass" },
  
    {name: "Charizard", height: 1.7, types: "fire" },

    {name: "Squirtle", height: 1, types: "water" },

  ]
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
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);

    button.addEventListener('click', function display(){

      pokemoneRepositroy.showDetails(pokemon);
    

    })

  };
  //prints pokemonlist array to console when called
  function showDetails(pokemon){

    console.log(pokemon.name);

  };
  
  return {

    getAll:  getAll,
    add: add,
    addlistitem: addlistitem,
    showDetails: showDetails

  };

})();

pokemoneRepositroy.getAll().forEach(function(pokemon){

  pokemoneRepositroy.addlistitem(pokemon);

  

})