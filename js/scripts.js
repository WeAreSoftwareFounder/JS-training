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

  let pokemonList = document.querySelector('.pokemon-list');
  let listPokemon = document.createElement('li');
  let button = document.createElement('button');
  button.classList.add("button-class");
  button.innerText = pokemon.name;
  listPokemon.appendChild(button);
  pokemonList.appendChild(listPokemon);

  button.addEventListener('click', function display(){

  showModal(pokemon.name, pokemon.height);
  console.log(pokemon);

  });

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

function loadDetails(item) {
  let url = item.showDetailsUrl;
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

function showDetails(pokemon) {
  loadDetails(pokemon).then(function () {
    console.log(pokemon);
  });
}

//prints pokemonlist array to console when called

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
  showDetails: showDetails,
  addListItem: addListItem,
  loadList: loadList,
  loadDetails: loadDetails,
  showModal: showModal,
  hideModal: hideModal

};

})();

pokemoneRepositroy.loadList().then(function(){

pokemoneRepositroy.getAll().forEach(function(pokemon){

  pokemoneRepositroy.addListItem(pokemon);
  
})

});