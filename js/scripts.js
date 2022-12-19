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

};

})();
  // Searches array for objects and prints to documment
  function Search(){

    pokemonRepository.add({name: 'Pikachu', height: 0.3, types: "Electric" });
    pokemonRepository.getAll().forEach(Element => document.writeln('<p>' + Element.name + ' ', Element.height + ' ', Element.types + ' ', '</p>'))

  }

// print object array to document loop
pokemonRepository.getAll().forEach(Element => document.writeln(Search()));