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
function addListItem(pokemon){

  let pokemonList = document.querySelector('.pokemon-list');
  let listPokemon = document.createElement('li');
  let button = document.createElement('button');
  button.classList.add("button-class");
  button.innerText = pokemon.name;
  listPokemon.appendChild(button);
  pokemonList.appendChild(listPokemon);

  button.addEventListener('click', function display(){

  showDetails();

  });

};

  async function loadList(){

  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
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

  async function loadDetails(pokemon){

  let url = 'https://pokeapi.co/api/v2/pokemon/';
  try {
    const response = await fetch(url);
    const details = await response.json();
    pokemon.imageUrl = details.sprites.front_default;
    pokemon.height = details.height;
    pokemon.types = details.types;
  } catch (e) {
    console.log(e);
  }

}

//prints pokemonlist array to console when called
function showDetails(pokemon){

  showModal(pokemon.name, pokemon.height);

}

function showModal(title, text) {
  let modalContainer = document.querySelector('#modal-container');

  // Clear all existing modal content
  modalContainer.innerHTML = '';

  let modal = document.createElement('div');
  modal.classList.add('modal');

  // Add the new modal content
  let closeButtonElement = document.createElement('button');
  closeButtonElement.classList.add('modal-close');
  closeButtonElement.innerText = 'Close';
  closeButtonElement.addEventListener('click', hideModal);

  let titleElement = document.createElement('h1');
  titleElement.innerText = title;

  let contentElement = document.createElement('p');
  contentElement.innerText = text;

  modal.appendChild(closeButtonElement);
  modal.appendChild(titleElement);
  modal.appendChild(contentElement);
  modalContainer.appendChild(modal);



  modalContainer.classList.add('is-visible');
}

document.querySelector('#show-modal').addEventListener('click', () => {
  showModal(title, text); //find name issue
  showDetails(pokemon);
});
function hideModal() {
  let modalContainer = document.querySelector('#modal-container');
  modalContainer.classList.remove('is-visible');

  let closeButtonElement = document.createElement('button');
  closeButtonElement.classList.add('modal-close');
  closeButtonElement.innerText = 'Close';
  closeButtonElement.addEventListener('click', hideModal);
}
window.addEventListener('keydown', (e) => {
  let modalContainer = document.querySelector('#modal-container');
  if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
    hideModal();  
  }
});


return {

  getAll:  getAll,
  add: add,
  addListItem: addListItem,
  showDetails: showDetails,
  loadList: loadList,
  loadDetails: loadDetails,
  showDetails: showDetails,
  showModal: showModal,
  hideModal: hideModal

};

})();

pokemoneRepositroy.loadList().then(function(){

pokemoneRepositroy.getAll().forEach(function(pokemon){

  pokemoneRepositroy.addListItem(pokemon);
  
  


})


})