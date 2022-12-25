// Creates pokemoneRepositry IFFE
let  pokemonRepository= (function(){

  let pokemonList =  [

    {name: "Bulbasor", height: 0.7, types: "grass" },
  
    {name: "Charizard", height: 1.7, types: "fire" },

    {name: "Squirtle", height: 1, types: "water" },

]

// add pokemon to pokemoneRepositroy IIFE
return {

  add: function(pokemone){

    pokemonList.push(pokemone);

  },

  //return all values of pokemonRepositry IIFE
  getAll: function(){

    return pokemonList;

  },

}

return {

  add : add,
  getAll: getAll,
  addlistitem: addlistitem,

};

})();
  // Searches array for objects and creates list to documment
  pokemonRepository.getAll().forEach(function(pokemon) {

    let pokemon_list = document.querySelector('.pokemon-list');
    let listitem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button-class');
    listitem.appendChild(button);
    pokemon_list.appendChild(listitem);


  });