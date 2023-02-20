let  pokemoneRepositroy =  (function(){
  let url = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
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
function addListItem(pokemon){

  let pokemonList = document.querySelector('.list-group');
  let listPokemon = document.createElement('li');
  listPokemon.classList.add('list-group-item')
  let button = document.createElement('button');
  button.classList.add("btn", "btn-info");
  button.innerText = pokemon.name;
  listPokemon.appendChild(button);
  pokemonList.appendChild(listPokemon);

  button.addEventListener('click', function () {

    document.querySelector('.modal-title').innerText = pokemon.name;
    document.querySelector('.modal-body').innerText = pokemon.height;
    document.getElementsByClassName('img').src = pokemon.imageUrl;
    

  })

};

  async function loadList(){

  try {
    const response = await fetch(url);
    const json = await response.json();
    json.results.forEach(function (item) {

      let pokemon = {
        name: item.name,
        showDetailsUrl: item.url,
      };
      add(pokemon);  
    });
  } catch (e) {
    console.log(e);
  }
}

  async function loadDetails(item) {
  let url = item.showDetailsUrl;
  try {
    const response = await fetch(url);
    const details = await response.json();
    // Now we add the details to the item
    item.imageUrl = details.sprites.front_default;
    item.height = details.height;
    item.types = details.types;
  } catch (e) {
    console.error(e);
  }
}

function showDetails(pokemon) {
  loadDetails(pokemon);
}


return {

  getAll:  getAll,
  add: add,
  showDetails: showDetails,
  addListItem: addListItem,
  loadList: loadList,
  loadDetails: loadDetails,

};

})();

pokemoneRepositroy.loadList().then(function(){

pokemoneRepositroy.getAll().forEach(function(pokemon){

  pokemoneRepositroy.addListItem(pokemon);
  pokemoneRepositroy.showDetails(pokemon);
  
  
})

});