let  pokemoneRepositroy =  (function(){

  let pokemonList = [

    {name: "Bulbasor", height: 0.7, types: "grass" },
  
    {name: "Charizard", height: 1.7, types: "fire" },

    {name: "Squirtle", height: 1, types: "water" },

  ]

  function getAll(){

    return pokemonList;

  }

  function add(pokemon){

    pokemonList.push(pokemon);

  }

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

  function showDetails(pokemon){

    console.log(pokemon);

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